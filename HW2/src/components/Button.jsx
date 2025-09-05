function Button({ text }) {
    const isDelete = text === "Delete"

    return <button className={isDelete ? 'button delete' : 'button'}>
        {text}
    </button>
}

export default Button