import React, { Component } from 'react';
import {Row,Container,Col} from 'react-materialize'
import './Developers.css'

class Developers extends Component {
	render() {
		//Const or fetch API
		const users=[
			{id:0,name:"User",img:"https://ui-avatars.com/api/?size=216&name=User",link:[{name:"whatsapp",url:""},{name:"facebook",url:""},{name:"twitter",url:""}]},
			{id:1,name:"User",img:"https://ui-avatars.com/api/?size=216&name=User",link:[{name:"whatsapp",url:""},{name:"linkedin",url:""},{name:"snapchat",url:""}]},
			{id:2,name:"User",img:"https://ui-avatars.com/api/?size=216&name=User",link:[{name:"whatsapp",url:""},{name:"instagram",url:""},{name:"quora",url:""},{name:"github",url:""}]},
		];
		
		//For linear Gradiant
		const colors=[
			{init:"D21DB0",final:"9133BF"},
			{init:"FFB707",final:"FF6401"},
			{init:"00FDFD",final:"00C6FC"}
		]
		return (
			<React.Fragment>
				<center>	
					<h1>Our Team</h1>
					</center>
				<Container>
<Row>
{users.map((user,i)=>(
<Col l={4} m={4} s={12}>
<div className='card'>
	<div className='show' style={{backgroundImage:'linear-gradient(45deg,#'+ colors[user.id % colors.length].init +', #'+ colors[user.id % colors.length].final +')'}}></div>
	<div className='card-content'>
		<img src={user.img}/>
          <h5 style={{color:'#'+colors[user.id % colors.length].init}}>{user.name}</h5>
		  <div className='social'>
			  {user.link.map((link,ii)=>(
			 <a href={link.url} className={'fab fa-' + link.name }></a>
			  ))}

		  </div>
		  </div>
</div>

</Col>
))}
</Row></Container>
</React.Fragment>
		);
	}
}

export default Developers;
	
