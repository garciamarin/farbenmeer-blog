import { useState } from "react";

export default function useApiRest() {

	const url = "http://localhost:3001/rest";

    const [blogs, setBlogs] = useState([{}])
    const [blog, setBlog] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    // useState({isError: false, status:''})

	function getBlogs() {
        setError( false )
        setLoading(true)

		fetch(url + '/blogposts')
			.then((res) => res.json())
			.then((result) => {
				setBlogs(result);
                setLoading(false)
			})
            .catch((e) => {
                setLoading(false)
                setError( true )
                console.log(e);
			})
    }

	function getBlog(id) {
        setError( error =>{ return {...error , ['isError'] : false  }})
        setLoading(true)
        
		fetch(url + '/blogpost/' +id)
			.then((res) => {
                if( ! res.ok ) setError(error =>{ return {...error , ['status'] : res.status  }})
                return res.json()
            })
			.then((result) => {
				setBlog(result);
                setLoading(false)
			})
			.catch((e) => {
                setLoading(false)
                setError( error =>{ return {...error , ['isError'] : true  }})
			})
	
}

return {
    getBlogs,
    getBlog,
    blogs, 
    blog,
    loading,
    error
};
}

