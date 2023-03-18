import Link from "next/link";
import { Container, Col, Row } from "react-bootstrap";
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Container>
      <Row>
        <Col>
          <div className="main-page">
            <div className={styles.mainHeading}>
              <h1>This is my First Next js project 🏃‍♂️</h1>
            </div>
            <div className={styles.btnDisplay}>
              <Link href='/ninjas' className={styles.button}>See all Ninjas</Link>  
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
} 
