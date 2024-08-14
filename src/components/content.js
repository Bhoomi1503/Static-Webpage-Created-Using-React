import '../index.css';
function Content(){
return(
    <div>
    <table>
         <tr>
             <th>S.No</th>
             <th>Name</th>
             <th>Dept</th>
             <th>College</th>
             <th>Year of Passed Out</th>
           </tr>
           <tr>
            <td>1</td>
             <td>Krish</td>
             <td>CSE</td>
             <td>HICET</td>
             <td>2025</td>
           </tr>
           <tr>
            <td>2</td>
            <td>Vishnu</td>
             <td>Chemical</td>
             <td>HICET</td>
             <td>2025</td>
           </tr>
           <tr>
            <td>3</td>
            <td>Raju</td>
             <td>IT</td>
             <td>HICET</td>
             <td>2024</td>
           </tr>
           <tr>
            <td>4</td>
            <td>Sai</td>
             <td>CSE</td>
             <td>HICET</td>
             <td>2025</td>
           </tr>
           <tr>
            <td>5</td>
            <td>Karthik</td>
             <td>AI&ML</td>
             <td>HICET</td>
             <td>2024</td>
           </tr>
           
         </table>
         <form>
            <label>User Name</label>
            <input type="text" placeholder="Enter your Username"/><br/>
            <label>Password</label>
            <input type="password" placeholder="Enter your Password"/><br/>
            <button type="submit">Login</button>
         </form>
      </div>
)
}
export default Content;