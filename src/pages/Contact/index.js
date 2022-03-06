import axios from 'axios';
import { useEffect, useState } from 'react';
import HelpForm from '../../components/Form/helpform';
import "./styles.css"
const Contact = () => {

    const [hIssues, setHIssues] = useState([])
    const [editForm, setEditForm] = useState(false)
    const [editIssue, setEditIssue] = useState({})

    useEffect(() => {
        fetchIssues()
    }, [])

    const fetchIssues = async () => {
        try {
            const response = await axios.get("https://ecommbackend2022.herokuapp.com/api/v1/checkallissues")

            console.log(response)
            setHIssues(response.data)

        } catch (error) {
            console.log(error)
        }
    }

    const deleteIssue = async (id) => {
        try {
            const response = await axios.delete(`https://ecommbackend2022.herokuapp.com/api/v1/deleteissue/${id}`)
            fetchIssues()
        } catch (error) {
            console.log(error)
        }
    }

    const handleEdit = (issue) => {
        setEditIssue(true)
        setEditIssue(issue)
    }


    return (
        <>
            <HelpForm
                fetchIssues={fetchIssues}
                editForm={editForm}
                editIssue={editIssue}
            />

            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Issue Type </th>
                        <th scope="col">Issue Description</th>
                        <th scope="col">ID Number</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>

                {
                        hIssues.map(hIssues => {
                            return (
                                <tr key={hIssues.id}>
                                    <td>{hIssues.issueType}</td>
                                    <td>{hIssues.issuedescription}</td>
                                    <td>{hIssues.id}</td>

                                    <td onClick={() => handleEdit(hIssues)}>Edit</td>
                                    <td onClick={() => deleteIssue(hIssues.id)}>Delete</td>


                                   
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>



                </>
                );
}

                export default Contact;
