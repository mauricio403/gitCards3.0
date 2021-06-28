import React from 'react'

 export const CardList = ({profiles, perfiles}) => (
	<div>
	{perfiles.map(perfiles =>  <Card key={perfiles.id} {...perfiles}/>)}
  	{profiles.map(profile => <Card key={profile.id} {...profile}/>)}
	</div>
);




export const Card = ({name, company, avatar_url}) => {


	return (
		<div className="github-profile">
			<img src={avatar_url} alt="xd"/>
			<div className='info'>
				<div className="name">{name}</div>
				<div className="company">{company}</div>
			</div>
			
		</div>
	);
}
