import React, { Component } from 'react';

import { Document } from '../../components/all'

import './index.scss';

class wow extends Component {
    constructor(props) {
        super(props);

        this.items = [{
            link: 'Homm.lekzd.ru',
            name: 'Герои Меча и Магии в браузере.'
        }, {
            link: 'Astexplorer.net',
            name: 'Абстрактно-синтаксическое дерево JS.'
        }, {
            link: 'Classic.minecraft.net',
            name: 'Minecraft в браузере.',
            description: 'Популярной игре-песочнице Minecraft исполнилось 10 лет. В честь этого разработчик Mojang запустил сайт, на котором можно поиграть в классическую версию проекта.'
        }];
    }

    render() {
        const content =
            <React.Fragment>
                {this.items.map(({ link, name, description }) => {
                    return (
                        <p className='paragraph' key={name}>
                            <a target='_blank' href={'http://' + link}>{link}</a> - {name}
                            {description && (
                                <span className='description'>{description}</span>
                            )}
                        </p>
                    )
                })}
            </React.Fragment>

        return (
            <Document content={content} context={this.props} />
        );
    }
}

export default wow;
