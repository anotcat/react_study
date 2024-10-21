import "./AppEatAndSplit.css";

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
    return (
        <div className="app">
            <FriendList/>
        </div>
    );
}

function FriendList() {
    return (
        <div className="sidebar">
            {initialFriends.map((friend) => <Friend friend={friend} key={friend.id}/>)}
        </div>
    );
}

function Friend({friend}) {
    return (
        <li>
            <img src={friend.image} alt={friend.name}/>
            <h3>{friend.name}</h3>
            {friend.balance < 0 &&
                <p className="red">you owns your friend {friend.name} ${Math.abs(friend.balance)}</p>}
            {friend.balance === 0 && <p>you and your friend {friend.name} are even</p>}
            {friend.balance > 0 && <p className="green">your friend {friend.name} owens you ${friend.balance}</p>}
            <button className="button">Select</button>
        </li>
    );
}