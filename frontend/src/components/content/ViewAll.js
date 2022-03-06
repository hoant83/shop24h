import React from 'react';
import { Button} from 'react-bootstrap';
function ViewAll ({onViewAllClick}){
    const viewAllClick = () => {
        onViewAllClick()
    }
        return (
            <>
                <Button onClick={viewAllClick} className="bg-black">View all</Button>
                
            </>
                
        )   

}  

  

export default ViewAll