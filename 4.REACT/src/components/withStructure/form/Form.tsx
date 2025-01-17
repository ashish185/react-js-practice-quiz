const Form = () => {
    return (
        <form>
            <h1>Personal Information</h1>
            <h5>Basic Info</h5>
            <p>Fill up all your basic information</p>
            <span title="open">X</span>
            <img src="https://randomuser.me/api/portraits/women/32.jpg" alt="Random women image" />
            <div data-testid="custom-elem">Custom HTML</div>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Enter Name"/>
            </div>
            <div>
                <label htmlFor="description">Description</label>
                <textarea name="description" id="description"></textarea>
            </div>
            <div>
                <label htmlFor="location">Location</label>
                <select
                    id="dropdown"
                    // value={selectedValue}
                    // onChange={handleChange}
                    style={{ marginLeft: "10px", padding: "5px" }}
                >
                    <option value="" disabled>
                        -- Select an option --
                    </option>
                    <option value="Option1">Option 1</option>
                    <option value="Option2">Option 2</option>
                    <option value="Option3">Option 3</option>
                </select>
            </div>
            <div>
                <input type="checkbox" id="terms" />
                <label htmlFor="terms">All is agreed</label>
            </div>
            <button>Submit</button>
        </form>
    )
}
export default Form