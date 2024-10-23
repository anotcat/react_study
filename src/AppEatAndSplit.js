import "./AppEatAndSplit.css";
import {useState} from "react";

const initialFriends = [
    {
        id: 118836,
        name: "Clark",
        image: "https://i.pravatar.cc/48?u=118836",
        balance: -7,
    },
    {
        id: 933372,
        name: "Sarah",
        image: "https://i.pravatar.cc/48?u=933372",
        balance: 20,
    },
    {
        id: 499476,
        name: "Anthony",
        image: "https://i.pravatar.cc/48?u=499476",
        balance: 0,
    },
];

export default function AppEatAndSplit() {
    const [showAddFriend, setShowAddFriend] = useState(false);
    const [friends, setFriends] = useState(initialFriends);
    const [selectedFriend, setSelectedFriend] = useState(null)

    /*
    注意：
    区分 handleAddFriend(xx) 普通函数与 组件函数 FriendsList({ xx }) 传入数据的区别。否则会报错接受不到数据
     */
    function handleAddFriend(friend) {
        setFriends(friends => [...friends, friend]);
        setShowAddFriend(false);
    }

    function handleSelectedFriend(friend) {
        // setSelectedFriend(friend);
        // button 复选
        setSelectedFriend((cur) => cur?.id === friend.id ? null : friend);
        // click select close add-friend-form
        setShowAddFriend(false);
    }

    return (
        <div className="app">
            <div className="sidebar">

                <FriendsList friends={friends} selectedFriend={selectedFriend} onSelection={handleSelectedFriend}/>

                {showAddFriend && <FormAddFriend onSetFriends={handleAddFriend}/>}

                <Button onClick={() => setShowAddFriend((show) => !show)}>
                    {showAddFriend ? "Close" : "Add Friend"}
                </Button>

            </div>
            {selectedFriend && <FormSplitBill selectedFriend={selectedFriend}/>}
        </div>
    );
}

function FriendsList({friends, selectedFriend, onSelection}) {
    return (
        <div className="sidebar">
            {friends.map((friend) => <Friend friend={friend} selectedFriend={selectedFriend} onSelection={onSelection} key={friend.id}/>)}
        </div>
    );
}

function Friend({friend,selectedFriend, onSelection}) {

    const isSelected = friend.id === selectedFriend?.id;

    return (
        <li className={isSelected && "selected"}>
            <img src={friend.image} alt={friend.name}/>
            <h3>{friend.name}</h3>
            {friend.balance < 0 &&
                <p className="red">you owns your friend {friend.name} ${Math.abs(friend.balance)}</p>}
            {friend.balance === 0 && <p>you and your friend {friend.name} are even</p>}
            {friend.balance > 0 && <p className="green">your friend {friend.name} owens you ${friend.balance}</p>}
            <Button onClick={() => onSelection(friend)}>{isSelected ? "Close":"Select"}</Button>
        </li>
    );
}

function FormAddFriend({onSetFriends}) {
    const [name, setName] = useState("")
    const [image, setImage] = useState("https://i.pravatar.cc/48")


    function handleSubmit(e) {
        e.preventDefault();
        if (!name || !image) return;
        const id = crypto.randomUUID()
        const newFriend = {
            id,
            name,
            image: `${image}?=${id}`,
            balance: 0
        }
       // console.log(newFriend);
        onSetFriends(newFriend)
        setName("")
        setImage("https://i.pravatar.cc/48")
    }

    return <form className="form-add-friend" onSubmit={handleSubmit}>
        <label>🤩Friend Name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
        <label>😎Image URL</label>
        <input type="text" value={image} onChange={(e) => setImage(e.target.value)}/>
        <Button>Add</Button>
    </form>
}

function FormSplitBill({selectedFriend}) {
    return <form className="form-split-bill">
        <h2>SPLIT A BILL WITH {selectedFriend.name}</h2>
        <label>😋Bill value</label>
        <input type="number"/>
        <label>🤑Your expense</label>
        <input type="number"/>
        <label>🥰{selectedFriend.name}'s expense</label>
        <input type="number"/>
        <label>🧐Who is paying the bill?</label>
        <select>
            <option>You</option>
            <option>{selectedFriend.name}'s</option>
        </select>
        <Button>Add</Button>
    </form>
}

function Button({children, onClick}) {
    return <button className="button" onClick={onClick}>{children}</button>
}
