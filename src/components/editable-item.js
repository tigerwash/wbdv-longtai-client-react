import React, {useState} from "react";
import {Link} from "react-router-dom";
// 这个useState 是一个local 的state， 用来防止我萌的改动造成global 的影响
const EditableItem = (
    {
        to="/somewhere/to/gp",
        deleteItem,// = () => alert("delete this " + item._id),
        updateItem,
        item = {title: "some title", _id: "ABC"}
    }) => {
    const [editing, setEditing] = useState(false)
    const [cashedItem, setCashedItem] = useState(item)

    return (
        <>
            {
                !editing &&
                <>
                    <Link className="nav-link" to={to}>
                        {item.title}
                    </Link>
                    <i onClick={() => setEditing(true)} className="fas fa-edit"></i>
                </>
            }
            {
                editing &&
                <>
                    <input
                        onChange={(e) =>
                            setCashedItem({
                                ...cashedItem,
                                title: e.target.value
                            })}
                        value={cashedItem.title}/>
                    <i onClick={() => {
                        setEditing(false)
                        updateItem(cashedItem)
                    }} className="fas fa-check"/>

                    <i onClick={() => {
                        setEditing(false)
                        deleteItem(item)
                    }} className="fas fa-times"/>
                </>
            }

        </>
    )
}

export default EditableItem;