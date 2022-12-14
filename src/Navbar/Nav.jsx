// import { Dropdown } from 'bootstrap'
import React from 'react'
import { Link } from 'react-router-dom'
// import { useTabIndex } from 'react-tabIndex';
import './nav.css'
export default function Nav() {
  // const tabindex=usetabindex() 
  return (
    <>
   	<div>
		<nav id="navbar">
			<ul className="menu">
				<li id="logo">
					<i className='far fa-building'/> Estatery
				</li>
				<li id="trigram" tabindex="-1">
				<div><i className="fa fa-bars"/> </div>				           
				</li>
				<span id="responsive-menu">
					<ul className="menu">
						<li className="menu-option">
						<Link to='/' id='r'>Rent</Link>
						</li>
						<li className="menu-option">
							<Link to='/Buy' id='b'>Buy</Link>
						</li>
						<li className="menu-option">
							<Link to='./sell' id='s'>Sell</Link>
						</li>

						<li className="menu-option">
                        <Link to='/Manage' id='m'> Manage Property </Link>
							<ul id="products">
								<li>Residential</li>
								<li>Commercial</li>
								<li>Industrial</li>
							</ul>
						</li>
						<li className="menu-option">
                        <Link to='/Resources' id='re'> Resources </Link>
							<ul id="products">
								<li>Our Agents</li>
								<li>Commercial Properties</li>
								<li>Rumson</li>
							</ul>
						</li>
						<li id="sign-in">
							<p>LogIn</p>
						</li>
						<li id="sign-up">
							<p>Sign up</p>
						</li>
					</ul>
				</span>
			</ul>
		</nav>
	</div>
    </>
  )
}

