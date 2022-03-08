import axios from 'axios';
import { useState } from 'react';

const HelpForm = ({ fetchIssue, editIssue, editForm }) => {
    console.log('editIssue', editIssue)

    const [issueType, setIssueType] = useState('')
    const [issueDescription, setIssueDescription] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        const newIssue = {
            issuetype: issueType,
            issuedescription: issueDescription
        }
        try {
            // To Edit an Issue on Help Request form
            if (editForm) {
                const response = await axios.put(`https://ecommbackend2022.herokuapp.com/api/v1/updateissue/${editIssue.id}`, newIssue)

                // Adding an issue to form 
            } else {
                const response = await axios.post('https://ecommbackend2022.herokuapp.com/api/v1/addissue', newIssue)

                if (response.status === 200) {
                    setIssueType('')
                    setIssueDescription('')
                }
            }
            fetchIssue()
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <form onSubmit={handleSubmit} className='p-3'>
            <div className="mb-3">
                <label className="form-label">Issue Type</label>
                <input
                    type="text"
                    value={issueType}
                    placeholder={editIssue.issuetype}
                    onChange={e => setIssueType(e.target.value)}
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                />
            </div>


            <div className="mb-3">
                <label className="form-label">Issue Description</label>
                <input
                    type="text"
                    placeholder={editIssue.issuedescription}
                    value={issueDescription}
                    onChange={e => setIssueDescription(e.target.value)}
                    className="form-control"
                    id="exampleInputPassword1"
                />
            </div>

            <div className='text-center'>
                <button type="submit" className="btn btn-success"> {editForm ? "Edit Entry" : "Add New Entry"}</button>
            </div>
        </form>
    );
}

export default HelpForm;
