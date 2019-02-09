import React, { Component } from 'react'

import {
	Document,
	Subtitle,
	Accordion
} from '../../components/all'

import * as Icons from './images'
import * as Code from './code'

import './index.scss'

class Lighthouse extends Component {
	constructor(props) {
		super(props);		
	}

	render() {
		const content =
			<React.Fragment>
				<p className='paragraph paragraph_type_blockquote'>
					Lighthouse analyzes web apps and web pages, collecting modern performance metrics and insights on developer best practices.
					</p>
				<Subtitle text='Using Lighthouse in Chrome DevTools' />
				<p className='paragraph'>Lighthouse is integrated directly into the Chrome Developer Tools, under the "Audits" panel.</p>
				<p className='paragraph'><b>Run it</b>: open Chrome DevTools, select the Audits panel, and hit "Run audits".</p>
				<img className='lighthouse__audit' src={Icons.default.AuditIcon} alt='' />
				<Subtitle text='Using the Node CLI' />
				<p className='paragraph'>The Node CLI provides the most flexibility in how Lighthouse runs can be configured and reported. Users who want more advanced usage, or want to run Lighthouse in an automated fashion should use the Node CLI.</p>
				<p className='paragraph'><b>Installation:</b></p>
				<div className='code' dangerouslySetInnerHTML={{ __html: Code.default.code1 }}></div>
				<p className='paragraph'><b>Run it:</b></p>
				<div className='code'>lighthouse https://airhorner.com/</div>
				<p className='paragraph'>By default, Lighthouse writes the report to an HTML file. You can control the output format by passing flags.</p>
				<Subtitle text='CLI options' size='s' />
				<Accordion
					showedContent={<div className='code' dangerouslySetInnerHTML={{ __html: Code.default.code2 }}></div>}
				/>
				<Subtitle text='Output Examples' size='s' />
				<Accordion
					showedContent={<div className='code' dangerouslySetInnerHTML={{ __html: Code.default.code3 }}></div>}
					opened={true}
				/>
				<Subtitle text='Viewing a report' />
				<p className='paragraph'>Lighthouse can produce a report as JSON or HTML.</p>
				<p className='paragraph'>HTML report:</p>
				<img className='lighthouse__audit' src={Icons.default.ExampleAudit} alt='' />
				<div className='lighthouse__slogan'>
					<img className='lighthouse__logo' src={Icons.default.Logo} alt='' />
					<p className='paragraph'><b>Lighthouse,</b> ˈlītˌhous (n): a <s>tower or other structure</s> tool containing a beacon light to warn or guide <s>ships at sea</s> developers.</p>
				</div>
			</React.Fragment>;

		return (
			<Document content={content} context={this.props} />
		)
	}
}

export default Lighthouse
