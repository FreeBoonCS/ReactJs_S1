import React from 'react';
import {Link} from 'react-router-dom';//it help u to connect from one router to another

const Header = () =>{
    return(
        <header>
            <nav>
                <Link to="/produst-list" className="pagelink"> Product </Link>
            
         
               <Link to="/user-list" className="pagelink"> User </Link>
               <Link to="/item-list" className="pagelink"> Item </Link>
                <Link to="/book-list" className="pagelink"> Books </Link>
               <Link to="/state-one" className="pagelink"> State1 </Link>
               <Link to="/state-2" className="pagelink" > State 2</Link>
               <Link to="/state-3" className="pagelink" > State 3</Link>
               <Link to="/state-4" className="pagelink" > State 4</Link>
               <Link to="/state-5" className="pagelink" > State 5</Link>
               <Link to="/state-6" className="pagelink" > State 6</Link>
               <Link to="/state-7" className="pagelink" > State 7</Link>
               <Link to="/state-8" className="pagelink" > State-8</Link>
               <Link to="/crud" className="pagelink" > State - Crud</Link>
               <Link to="/state-10" className="pagelink" > State - 10</Link>
               <Link to="/product" className="pagelink" > product</Link>
               <Link to="/profile" className="pagelink" > Nested Routing</Link>
               <Link to="/hook1" className="pagelink" > Hook-1</Link>
               <Link to="/hook2" className="pagelink" > Hook-2</Link>
               <Link to="/hook3" className="pagelink" > Hook-3</Link>
               <Link to="/0/premium/myhook" className="pagelink" > Use Params</Link>
               <Link to="/0/Free/use-effect" className="pagelink">useEffect</Link>




            </nav>
        </header>
    )
}
export default Header;