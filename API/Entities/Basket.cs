namespace API.Entities
{
    public class Basket
    {
        public int Id { get; set; }
        public string BuyerId { get; set; }
        public List<BasketItem> Items { get; set; } = new();
        public string PaymentIntentId { get; set; }
        public string ClientSecret { get; set; }

        public void AddItem(Product product, int quantity)
        {
            var existingItem = Items.FirstOrDefault(item => item.ProductId == product.Id);
            if (existingItem != null)
            {
                existingItem.Quantity += quantity;
                return;
            }

            Items.Add(new BasketItem { Product = product, Quantity = quantity });
        }

        public void RemoveItem(int productId, int quantity)
        {
            var ExistingItem = Items.FirstOrDefault(item => item.ProductId == productId);
            if (ExistingItem == null)
                return;
            ExistingItem.Quantity -= quantity;

            if (ExistingItem.Quantity <= 0)
                Items.Remove(ExistingItem);
        }
    }
}
