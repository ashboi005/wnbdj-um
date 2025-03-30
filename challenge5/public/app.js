document.addEventListener('DOMContentLoaded', () => {
    const loadDataBtn = document.getElementById('loadDataBtn');
    const contentContainer = document.getElementById('contentContainer');
    let dataLoaded = false;
    
    loadDataBtn.addEventListener('click', async () => {
        if (!dataLoaded) {
            try {

                loadDataBtn.textContent = 'Loading...';
                loadDataBtn.disabled = true;
                
                const response = await fetch('http://localhost:3000/items');
                
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                
                const items = await response.json();
                
                contentContainer.innerHTML = '';
                              
                items.forEach(item => {
                    const itemCard = document.createElement('div');
                    itemCard.className = 'item-card';
                    
                    const itemTitle = document.createElement('div');
                    itemTitle.className = 'item-title';
                    itemTitle.textContent = `Item ${item.id}`;
                    
                    const itemDescription = document.createElement('div');
                    itemDescription.className = 'item-description';
                    itemDescription.textContent = `Description for item ${item.id}`;
                    
                    itemCard.appendChild(itemTitle);
                    itemCard.appendChild(itemDescription);
                    contentContainer.appendChild(itemCard);
                });
                
                loadDataBtn.textContent = 'Load Data';
                loadDataBtn.disabled = false;
                dataLoaded = true;
                
            } catch (error) {
                console.error('Error:', error);
                contentContainer.innerHTML = `<p style="color: red">Error loading data: ${error.message}</p>`;
                loadDataBtn.textContent = 'Retry';
                loadDataBtn.disabled = false;
            }
        } else {
            contentContainer.innerHTML = '';
            dataLoaded = false;
            loadDataBtn.textContent = 'Load Data';
        }
    });
}); 