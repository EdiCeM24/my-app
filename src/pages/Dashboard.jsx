// import { Link } from 'react-dom'

function Dashboard(props) {
   let intro = (
      <div>
        <h1>My name is Marcus</h1>
      </div>
   )
    return (
        <div className="kent-pole ml-16 mb-3">
            <h2 className="">Dashboard Page</h2>
           <div className="edi mb-3">
              <p>Lorem ipsum dolor sit amet consectetur. {props.color}</p>
           </div> 
           <div className="mb-3">{ intro }</div>

          <div className="block items-center justify-center mt-4">
             <form className="flex-col gap-8 m-auto">
                <input type="text" name="text" id="text" value placeholder="Full name" required/>

                <input type="email" name="email" id="email" value placeholder="Your email" required/>

                <input type="password" name="password" id="password" value placeholder="Your password" required/>

                <img src="" alt="admin" required className="mt-4"/> 

                <button type="submit">Scan</button>
             </form>
          </div>

        </div>
    )
}

export default Dashboard;
