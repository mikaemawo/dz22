import { Card, Tag } from "antd";

function UserCard({ user }) {

if (!user.Active) {
    return null;
}

return (
    <Card
    hoverable
    style={{
        width: 320,
        borderRadius: 15,
        overflow: "hidden",
        backgroundColor: "#1e293b",
        color: "#fff",
    }}
    cover={
        <img
        alt="hero"
        src={user.img}
        style={{ height: 350, objectFit: "cover" }}
        />
    }
    >
    <h2>{user.name}</h2>

    <p>Возраст: {user.age}</p>

    <p>Город: {user.city}</p>

    <Tag color="red">Active Hero</Tag>

    </Card>
);
}

export default UserCard;