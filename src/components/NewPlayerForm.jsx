export default function NewPlayerForm() {
    return (
      <div className="newPlayer">
        <form> 
          <h1>WELCOME TO THE PUPPY BOWL</h1>
          <label for='id'>ID:</label>
          <input type='text' name='id'/>
          <label for='name'>NAME:</label>
          <input type='text' name='name'/>
          <label for='status'>STATUS:</label>
          <input type='text' name='status'/>
          <label for='breed'>BREED:</label>
          <input type='text' name='breed'/>
          <label for='cohortId'>COHORT ID:</label>
          <input type='text' name='cohortId'/> 
          <label for='imageUrl'>IMAGE URL:</label>
          <input type='text' name='imageUrl'/>
          <br/>
          <button type='submit'>Submit Form</button>
        </form>
      </div>
    );
  }