const Item = ({item, drag, itemImgObj}) => {
    return (
        <div className="unrankedCell">
            <img
                id={`item-${item.id}`}
                src={itemImgObj.image}
                alt={itemImgObj.description }
                style={{ cursor: "pointer" }}
                draggable="true"
                onDragStart={drag}
            />

        </div>
    )
}

export default Item;