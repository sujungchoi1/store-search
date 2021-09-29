import '../App.css';
import { List } from 'semantic-ui-react';

const StoreList = ({ store }) => {
    return (
        <div className="list">
            <h2>Searched Stores:</h2>
            {store.map((value, index) => {
                return (
                    <List key={index}>
                        <List.Item>
                            <List.Icon name='map marker alternate' color='blue' size="large" />
                            <List.Content>
                                <List.Header className="list-store">{value.name}</List.Header>
                                <List.Description className="list-tags">{value.tags}</List.Description>
                            </List.Content>
                        </List.Item>
                    </List>
                )
            })}
        </div>
    )
}

export default StoreList
