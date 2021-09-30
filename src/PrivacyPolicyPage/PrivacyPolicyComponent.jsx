import React, {useState, useEffect } from 'react'
import { Col, Container, Row, Spinner } from 'reactstrap'
import {useParams} from 'react-router-dom';
import db  from '../FirbaseServices/Firebase'
const Privacy_policy_component = () => {
    const [userData, setUserData] = useState(null);
    let id  = useParams();


    const third_part = ['AdMob', 'Facebook Ads', 'Firebase', 'Digital Screen', 'AWS', 'GCP', 'Azure'];
    const perms = ['Microphone', 'Camera', 'Location', 'Storage', 'Call', 'Contacts'];

    useEffect(()=>{
        db.collection('apps').doc(id.id)
        .get()
        .then(function(doc) {
            if(doc.exists) {
                setUserData(doc.data());
                fetch(`https://legalsoft.netlify.app/privacy/${id.id}`)
            } else {
                console.log('No data exist')
            }
        }).catch(function(error){
            console.log('error occured: ' + error);
        })
        
    },userData);
    //CcqSfc45pX4k3pVjeT22
    
    if(userData === null)
    return(
        <Container>
            <Spinner type="grow" color="primary" />
            <Spinner type="grow" color="secondary" />
            <Spinner type="grow" color="success" />
            <Spinner type="grow" color="danger" />
            <Spinner type="grow" color="warning" />
            <Spinner type="grow" color="info" />
            <Spinner type="grow" color="light" />
            <Spinner type="grow" color="dark" />
        </Container>
    )
    else
    {
        return (
            <Container style = {{marginTop: '30px', marginBottom: '30px'}}>
                <Row>
                    <Col className = 'col-5'>
                            <div style={{border:'1px solid black',height:'180px',width:'180px',display:'flex',justifyContent:'center',alignItems:'center'}}>
                                <img style={{height:'150px',width:'150px'}} src={userData.logo} alt="app-logo"/>
                            </div>
                    </Col>
                    <Col>
                        <Row>
                            <p>
                                 {userData.app_name} By {userData.company_name}
                            </p>
                        </Row>
                    </Col>
                </Row>
                <Row style = {{marginTop: '10px'}}>
                    <strong>Privacy Policy</strong>
                </Row>
                <Row>
                    <p>
                    We have developed a Privacy Policy to inform you regarding collection, use, store, disclosure, and transfer of your information. Please get acquainted with our privacy practices. 
    We neither have on our own mechanism to collect, store, process your personal information on our server nor direct access to personal data except you choose to communicate or share and therefore does not collect, store, disclose, use and transfer any personal data.
     We, for monetization & analysis purpose use third party services-
                    </p>
                    <p>
                         {third_part.map((i)=>{
                                return (userData.third_party_services[third_part.indexOf(i)]===true) && (<li> {i} </li>);
                            
                        })} 
                    </p>
                    <p>
                    These THIRD PARTY SERVICE PROVIDERS collect information from you in order to provide corresponding service and better user experience.
                    </p>
                </Row>
                <Row style = {{marginTop: '10px'}}>
                    <strong>Information Collection and Use</strong>
                </Row>
                <Row style = {{marginTop: '10px'}}>
                    <strong>Personal Information</strong>
                    <p style = {{marginTop: '10px'}}>                    
                         {perms.map((i)=>{
                                return (userData.permissions[perms.indexOf(i)]===true) && (<li> {i} </li>);
                        })}
                        </p>
                    <p>Third party services used by us, while providing corresponding services, may collect the information such as “an identifier on your device” which may be recognised as personal information.    
    </p>
                    <strong>Non –personal information</strong>
                    <p>Third party services used by us may collect Non-Personal Information about Users whenever they interact with our Application. Non-Personal Information is in a form that does not, on its own, permit direct association with any specific individual, which may include the information about your devices, including the versions of phone model and other similar information. 
     We may collect and store details of how our Service is used, which may be used to provide, maintain, enhance and improve our Application and Service.
    </p>
                </Row>
                <Row style = {{marginTop: '10px'}}>
                    <strong>THIRD PARTY SERVICE PROVIDERS USED BY THE APP AND THEIR PRIVACY POLICIES’ LINKS
    </strong>
                    <p style = {{marginTop: '10px'}}>
                    For a better experience, while using our Service, the App does use third party services that may collect information used to identify you. We urge you to get acquainted with their Privacy Practices.
                    </p>
                    <p>
                        Third party services: <br />
                        {third_part.map((i)=>{
                                return (userData.third_party_services[third_part.indexOf(i)]===true) && (<li> {i} </li>);
                        })} 
                    </p>
                </Row>
                <Row style = {{marginTop: '10px'}}>
                    <strong>
                    Disclosure of your information
                    </strong>
                    <p style = {{marginTop: '10px'}}>
                    We do not store Personal Information and therefore we do not disclose your Personal Information.
      We may disclose Non-Personal Information to our trusted affiliates who shall comply with this Privacy Policy and the relevant privacy laws. We do not combine Non-Personal Information with Personal Information. 
                    </p>
                </Row>
                <Row style = {{marginTop: '10px'}}>
                    <strong>
                    Law enforcement
                    </strong>
                    <p style = {{marginTop: '10px'}}>
                    Under certain circumstances, we may be required to disclose your information if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency).
                    </p>
                </Row>
                <Row style = {{marginTop: '10px'}}>
                    <strong>
                    Other legal requirements
                    </strong>
                    <p style = {{marginTop: '10px'}}>
                    We may disclose your information in the good faith belief that such action is necessary to:
                    </p>
                    <ul style = {{listStyle: 'none'}}>
                        <li>* Comply with a legal obligation</li>
                        <li>* Protect and defend the rights or property </li>
                        <li>* Prevent or investigate possible wrongdoing in connection with the Service</li>
                        <li>* Protect the personal safety of users of the Service or the public</li>
                        <li>* Protect against legal liability</li>
                    </ul>
                </Row>
                <Row style = {{marginTop: '10px'}}>
                    <strong>
                    Third-Party Sites and services
                    </strong>
                    <p style = {{marginTop: '10px'}}>
                    Application may contain links to third-party websites, products, and services. Data collected by third party parties, which may include such things as location data or contact details, is governed by their privacy practices. We encourage you to learn about the privacy practices of those third parties. We are not responsible for, the privacy practices of Websites & services operated by third parties, whether they are linked to or otherwise accessible from Application.                                                                                   
     The inclusion of a link or accessibility of third party Websites & services does not imply endorsement of such third party Website & services by us.
                    </p>
                </Row>
                <Row style = {{marginTop: '10px'}}>
                    <strong>
                    Third-Party Sites (as facility)
                    </strong>
                    <p style = {{marginTop: '10px'}}>
                    In general, the applications, the services and the Site access third party information (such as your Facebook account information) through application interfaces. We may provide links to third-party Web Sites, such as LinkedIn profile as a facility to our Users. The Site may also carry advertisements from other companies. When you click on links of third parties in an Application, you may leave the Application. This Policy does not address, and we are not responsible for, the privacy practices of Web sites operated by third parties, whether they are linked to or otherwise accessible from an Application. The inclusion of a link or accessibility of third party Websites does not imply endorsement of such third party Website by us.
     <br />The data that you transfer and share through Application may be intercepted, collected, used and disclosed by third parties. We are not responsible for any interception, collection, use and disclosure of your information by any third party.
                    </p>
                </Row>
                <Row style = {{marginTop: '10px'}}>
                    <strong>
                    Children’s Privacy
                    </strong>
                    <p style = {{marginTop: '10px'}}>
                    This Application does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we will be able to do necessary actions. 
                    </p>
                </Row>
                <Row>
                    <strong style = {{marginTop: '10px'}}>
                    Sensitive Information
                    </strong>
                    <p style = {{marginTop: '10px'}}>
                    It is never intended and therefore we ask that you not send us, and you not to disclose, any sensitive Personal Information (e.g., information related to racial or ethnic origin, political opinions, religion or other beliefs, health, sexual orientation, criminal background or membership in past organisations, including trade union memberships) on or through an Application, the Services or otherwise to us or anyone.
                    </p>
                </Row>
                <Row style = {{marginTop: '10px'}}>
                    <strong>
                    Changes to This Privacy Policy
                    </strong>
                    <p style = {{marginTop: '10px'}}>
                    We may update or supplement our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page by release of new Update. Thus, by keeping App update, you are advised to review this page periodically for any changes. These changes are effective immediately on release of Update.
                    <br />
                    As long as you continue to use the Service, you are bound by the terms of the Privacy Policy. If you disagree with any changes to this Policy and do not wish your information to be subject to a revised Policy, you will need to stop using this App.
                    </p>
                </Row>
                <Row style = {{marginTop: '10px'}}>
                    <strong>
                    Data Security
                    </strong>
                    <p style = {{marginTop: '10px'}}>We take the security of your Personal data very seriously, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure & reliable. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security. Please be aware that no security measures that we take to protect your data are absolutely guaranteed to avoid unauthorised access or use of your data. 
     When you use our Applications or Service, the data and content you choose to share is visible to other users / Users and can be read, collected or used by them. You are responsible for the information you choose to share or submit in these instances. 
                    </p>
                </Row>
                <Row style = {{marginTop: '10px'}}>
                    <strong>Contacting us</strong>
                    <p style = {{marginTop: '10px'}}>If you have any questions or queries about this Policy or out privacy practices, or to report any violations of this Policy of our Applications, please contact us at:
                     </p> 
                      <br /> <p style = {{margin: '5px'}}><strong>Email</strong>: {userData.email}<br /> <strong>Contact Number:</strong> {userData.contact}
                    </p>
                </Row>
            </Container>
        )
    }
}

export default Privacy_policy_component
