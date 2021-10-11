import styles from "./List.module.css";

function List({ stories }) {
    return (
        <div>
            <ol>
            {stories.map(function(items, index)
            {
                return(
                    <>
                    <li key={index}>
                        <div className={styles.span}>
                        <span>
                            <a href={items.url}>{items.title}</a>
                        </span>
                        <span>Author:{items.author}</span>
                        <span>Comment:{items.num_Comment}</span>
                        <span>Points:{items.points}</span>
                        <span>Id:{items.objectID}</span>
                        </div>
                    </li>
                    <hr/>
                    </>
                )
            }
            )
            }</ol>
        </div>
    );
}

export default List;