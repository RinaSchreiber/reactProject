import { useState } from "react"

function Users() {
    const [toShow, setToShow] = useState(false)
    const [toShowComments, setToShowComments] = useState(false)
    const [toShowPost, setToShowPost] = useState(false)
    const [toShowToDo, setToShowToDo] = useState(false)
    const [allUsers, setAllUser] = useState([])
    const [allPost, setAllPost] = useState([])
    const [allTodos, setAllTodos] = useState()
    const [allComments, setAllComment] = useState()

    const getAllUsers = async () => {
        setAllUser(await fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
        )
        setToShow(true)
        setToShowPost(false)
    }

    const getAllTodos = async (id) => {
        setAllTodos(await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then(response => response.json())
        )
        setToShowPost(true)
    }


    const getAllPosts = async () => {
        setAllPost(await fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
        )
        setToShowToDo(false)
        setToShow(false)
        setToShowPost(true)

    }

    const getAllComments = async (id) => {
        setAllComment(await fetch(`https://jsonplaceholder.typicode.com/comments/${id}`)
            .then(response => response.json())
        )
        setToShowComments(true)
    }

    return <>
        <button onClick={getAllUsers}>get all users</button>
        <button onClick={getAllPosts}>get all posts</button>
        {
            toShow &&
            allUsers.map((e) =>
                <label onClick={() => getAllTodos(e.id)}>
                    <br />
                    {e.name}
                    <button onClick={() => {
                        <label>
                            <label>{e.id}</label>
                            <label>{e.username}</label>
                            <label>{e.email}</label>
                            <label>adress:
                                <label>{e.street}</label>
                                <label>{e.suite}</label>
                                <label>{e.city}</label>
                            </label>
                        </label>

                    }}>read more</button>
                </label>
            )
        }
        <br />
        <br />
        {/* {
            toShowToDo && 
            allTodos.map((e) =>
                <label >
                    <br />
                    {e.title}
                </label>
            )
        } */}
        {
            toShowToDo &&
            <label>{allTodos.title}</label>
        }
        {
            toShowPost &&
            allPost.map((e) =>
                <label onClick={() => getAllComments(e.id)}>
                    <br />
                    {e.title}
                </label>
            )

        }
        <br />
        <br />
        {
            toShowComments &&
            <label>{allComments.title}</label>
        }

    </>
}

export default Users