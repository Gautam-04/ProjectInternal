import React from 'react';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';

function VerifyCard({ ip, latitude, logitude, time, verified, rescued, onVerify, onRescue }) {
    // const [isVerified, setIsVerified] = useState(verified);
    // const [isRescued,setIsRescued] = useState(rescued)

    // const handleVerification = () => {
    //     setIsVerified(true);
    // };
    // const handleRescue = () =>{
    //     setIsRescued(true);
    // }

    return (
        <>
            <Card bg={!rescued? 'danger' : 'success'} className='verifyCard'>
                <Card.Header>IP Address: {ip}</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <h6>GPS Location</h6>
                        <span>{latitude} {' '} {logitude}</span>
                        <h1>{time}</h1>
                    </blockquote>
                    <footer className="blockquote-footer">
                        <div className="buttongroups">
                            {!verified && (
                                <Button onClick={onVerify} disabled={verified}>
                                    {verified ? "Verified" : "Not Verified"}
                                </Button>
                            )}
                            {verified && !rescued && (
                                <Button onClick={onRescue} disabled={rescued}>
                                    {rescued ? "Rescued" : "Mark as Rescued"}
                                </Button>
                            )}
                        </div>
                    </footer>
                </Card.Body>
            </Card>
        </>
    );
}

export default VerifyCard;
