import React from "react";
import Header from "../../components/Header";
import MainLayout from "../../components/MainLayout";
import BigNewsColumn from "../../components/BigNewsColumn"
import SmallNewsColumn from "../../components/SmallNewsColumn";
import HotNewsCard from "../../components/HotNewsCard";
import RecentNewsCard from "../../components/RecentNewsCard";


export interface MainProps {
}

const bigNews = [
    {
        _id: '1',
        title: 'Требониан Галл происходил из старинного этрусского рода. В конце правления императора Деция Траяна он занимал должность легата',
        description: 'Будущий император Гай Вибий Требониан Галл родился около 206 года. Эта датировка основана на сообщении Псевдо-Аврелия Виктора, который в своей «Эпитоме» пишет, что на момент смерти Гаю было примерно сорок семь лет.',
        img: 'https://u-stena.ru/upload/iblock/8c2/8c2f36e88e65de30b8712b772cdf134a.jpg',
        createDate: new Date('1995-12-17T03:24:00'),
        statistics: {
            likes: 2800000,
            comments: 1500,
        },
        tag: {
            _id: '1',
            alias: 'real-estate',
            name: 'недвижимость',
            color: '#E7C652'
        }
    },
    {
        _id: '2',
        title: 'Мининформ приостанавливает статус СМИ для TUT.BY на три месяца с 1 октября',
        description: 'Приказом министра информации Игоря Луцкого от 29 сентября, который получила редакция, для TUT.BY приостановлена возможность использовать с 1 октября 2020 года статус сетевого издания',
        img: 'https://u-stena.ru/upload/iblock/8c2/8c2f36e88e65de30b8712b772cdf134a.jpg',
        createDate: new Date('1995-12-17T03:24:00'),
        statistics: {
            likes: 1500,
            comments: 100,
        },
        tag: {
            _id: '4',
            alias: 'real-estate',
            name: 'финансы',
            color: '#68E082'
        }
    }
]
const hotNews = [
    {
        _id: '3',
        img: 'https://u-stena.ru/upload/iblock/8c2/8c2f36e88e65de30b8712b772cdf134a.jpg',
        title: 'Проглотившая слона змея стала классикой за 2000 лет до «Маленького принца».',
        statistics: {
            likes: 2500,
            comments: 150
        },
        tag: {
            _id: '1',
            name: 'Спорт',
            alias: 'Sport',
            color: '#609FFF'
        }
    },
    {
        _id: '4',
        img: 'https://u-stena.ru/upload/iblock/8c2/8c2f36e88e65de30b8712b772cdf134a.jpg',
        title: 'Проглотившая слона змея стала классикой за 2000 лет до «Маленького принца».',
        statistics: {
            likes: 3500,
            comments: 250
        },
        tag: {
            _id: '4',
            name: 'Финансы',
            alias: 'finance',
            color: '#68E082'
        }
    },
    {
        _id: '5',
        img: 'https://u-stena.ru/upload/iblock/8c2/8c2f36e88e65de30b8712b772cdf134a.jpg',
        title: 'Проглотившая слона змея стала классикой за 2000',
        statistics: {
            likes: 4500,
            comments: 150
        },
        tag: {
            _id: '2',
            name: 'Афиша',
            alias: 'affiche',
            color: '#F34C4C'
        }

    },
    {
        _id: '6',
        img: 'https://u-stena.ru/upload/iblock/8c2/8c2f36e88e65de30b8712b772cdf134a.jpg',
        title: 'Хоккейный клуб «Тампа-Бэй Лайтнинг» (на фото) второй раз в истории завоевал Кубок Стэнли, обыграв в финале «Даллас Старз»',
        statistics: {
            likes: 5500,
            comments: 150
        },
        tag: {
            _id: '1',
            name: 'Спорт',
            alias: 'Sport',
            color: '#609FFF'
        }
    }
]
const recentNews = [
    {
    createDate: new Date('1995-12-17T03:24:00'),
    title: 'В Сети появился список, где в Минске устанавливают видеокамеры для наблюдения за улицей'
},
    {
        createDate: new Date('1995-12-17T03:24:00'),
        title: 'МИД Беларуси объявил об ответных санкциях в отношении стран Балтии'
    },
    {
        createDate: new Date('1995-12-17T03:24:00'),
        title: 'Индийский струнный барабан оказался вовсе не барабаном'
    },
    {
        createDate: new Date('1995-12-17T03:24:00'),
        title: 'Киевский депутат получил ранение во время чистки оружия'
    },
    {
        createDate: new Date('1995-12-17T03:24:00'),
        title: 'Российские декабристы послужили живым примером для грузинских'
    },
    {
        createDate: new Date('1995-12-17T03:24:00'),
        title: 'Отрицательный персонаж шекспировской комедии предлагает положительным освободить их рабов'
    },
    {
        createDate: new Date('1995-12-17T03:24:00'),
        title: 'Последний рассказ смертельно больного Тургенева был надиктован им на смеси французского с немецким и итальянским'
    },
    {
        createDate: new Date('1995-12-17T03:24:00'),
        title: 'Православный филолог вступил в компартию, когда та повернулась лицом к церкви'
    },
    {
        createDate: new Date('1995-12-17T03:24:00'),
        title: 'Будущий премьер-министр отсидел четыре месяца и шестнадцать дней за оскорбление президента'
    }

]
const Main: React.FC<MainProps> = ({}) => {
    return (<>
        <Header/>
        <MainLayout>
            <BigNewsColumn items={bigNews}/>
            <SmallNewsColumn title='Горячее'>
                {hotNews.map(news => <HotNewsCard {...news}/>)}
            </SmallNewsColumn>
            <SmallNewsColumn title={'Последние новости'}>
                {recentNews.map(news => <RecentNewsCard {...news}/>)}
            </SmallNewsColumn>
        </MainLayout>
    </>);
};

export default Main;