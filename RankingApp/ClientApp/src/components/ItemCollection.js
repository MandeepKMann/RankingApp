import Item from "./Item.js";

const ItemCollection = ({items, drag, imgArr}) => {
    return (
        <div className="itemsNotRanked">
            {
                items.map((item) => (item.ranking === 0)
                    ? <Item
                        item={item}
                        drag={drag}
                        itemImgObj={imgArr.find(o => o.id === item.imageId)}
                    />
                    :null)
            }
        </div>
    )
}

export default ItemCollection;