import React, { Component } from 'react';
import {Row,Card,Col,Icon, CardTitle} from 'react-materialize'
import 'AboutUs.css'
class AboutUs extends Component {
	render() {
		const users=[
			{id:0,name:"Arpit",link:"sd"},
			{id:1,name:"Arpait",link:"sd"}
		];
		return (
			<div>
<Row>
{users.map(user=>(
<Col l={2} m={3} s={12}>
<Card title={user.name} header={<img src="http://arpit.rf.gd/profile.png"/>}>
	fsd
</Card>
</Col>
))}
</Row>
			</div>
		);
	}
}

export default AboutUs;
	