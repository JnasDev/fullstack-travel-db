import React, { useState, useEffect } from "react";
import { Button, Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
   const [attractions, setAttractions] = useState([]);

   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await fetch("http://localhost:4000/attractions"); //fetch เข้าไปรับ Data
            const result = await response.json(); //แปลง Data เข้ามาเป็น JSON (เพื่อที่จะไห้ frontend มาตกแต่ง Data)
            setAttractions(result);  //Set Data ให้เข้าไปอยู่ใน attractions(useState)
         } catch (error) {
            console.error(error);
         }
      };

      fetchData(); //เรียกไช้ Data (ทุกครั้งเมื่อทุกขั้นตอน fetch เสร็จสิ้นแล้ว)
   }, []);

   return (
      <>
         <Container>
            <Row>
               {attractions.map((attraction) => (  //นำ Data มา Map เพื่อ loop หาข้อมูลทั้งหมดใน attractions ( MySQL|| Database )
                  <Col xs={12} sm={4} key={attraction.id}>
                     <Card style={{ width: "100%" }}>
                        <Card.Img
                           variant="top"
                           src={attraction.coverimage}
                        />
                        <Card.Body>
                           <Card.Title>{attraction.name}</Card.Title>
                           <Card.Text>
                           {attraction.detail}
                           </Card.Text>
                           <Button variant="primary">See Details</Button>
                        </Card.Body>
                     </Card>
                  </Col>
               ))}
            </Row>
         </Container>
      </>
   );
}

export default App;
