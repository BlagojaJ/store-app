import { Box, Button, Grid, Typography } from '@mui/material';
import { Order } from '../../app/models/order';
import BasketTable from '../basket/BasketTable';
import { BasketItem } from '../../app/models/basket';
import BasketSummary from '../basket/BasketSummary';

interface Props {
  order: Order;
  setSelectedOrder: (id: number) => void;
}

export default function OrderDetail({ order, setSelectedOrder }: Props) {
  return (
    <>
      <Box display="flex" justifyContent="space-between">
        <Typography sx={{ p: 2 }} variant="h4" gutterBottom>
          Order# {order.id} - {order.orderStatus}
        </Typography>
        <Button
          variant="contained"
          size="large"
          sx={{ m: 2 }}
          onClick={() => setSelectedOrder(0)}
        >
          Back to orders
        </Button>
      </Box>
      <BasketTable items={order.orderItems as BasketItem[]} isBasket={false} />
      <Grid container>
        <Grid item xs={6} />
        <Grid item xs={6}>
          <BasketSummary subtotal={order.subtotal} />
        </Grid>
      </Grid>
    </>
  );
}
