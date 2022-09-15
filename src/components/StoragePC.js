import Navigation from './Navigation'
import StorageCard from './StorageCard';
import RemoveButton from './RemoveButton'

function StoragePC(){
    return(
        <div>
            <Navigation />
            <StorageCard />
            <StorageCard />
            <StorageCard />
            <StorageCard />
            <StorageCard />
            <RemoveButton />
        </div>
    )
}
export default StoragePC;