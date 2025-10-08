import { Container, Header,ListContainer,Card } from './styles';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';

export default function OrderList (){
    return (
        <Container>
            <Header>
                <strong>3 Solicitações</strong>
                <a href='/' >Nova solicitação</a>
            </Header>

            <ListContainer>
                <header>
                    <button type='button'>
                        <span>Date</span>
                        <img src= {arrow} alt='Arrow' width={18}/>
                    </button>

                </header>
                   <Card>
                    <div className='info'>
                        <div className='title'>
                            <strong>Hotel Mercury</strong>
                            <small>05/10/2025</small>
                        </div>
                        <strong>Total enxoval:</strong>
                        <small className='total' >50</small>
                        <br/>
                        <span>Tiago Siqueira </span>
                        <span>(41)9999-9999 </span>
                    </div>

                    <div className='actions'>
                        <a href='/'>
                            <img src={edit} alt='Edit' />
                        </a>
                        <button type='button'>
                            <img src={trash} alt='Delete'/>
                        </button>
                    </div>
                   </Card>

                   <Card>
                    <div className='info'>
                        <div className='title'>
                            <strong>Ibis</strong>
                            <small>05/10/2025</small>
                        </div>
                        <strong>Total enxoval:</strong>
                        <small className='total' >80</small>
                        <br/>
                        <span>Tiago Siqueira </span>
                        <span>(41)9999-1234 </span>
                    </div>

                    <div className='actions'>
                        <a href='/'>
                            <img src={edit} alt='Edit' />
                        </a>
                        <button type='button'>
                            <img src={trash} alt='Delete'/>
                        </button>
                    </div>
                   </Card>
            </ListContainer>
        </Container>
    )
}
