import {
  MenuItem,
  List,
  ListItemButton,
  ListItemText,
  Menu,
  Card,
} from "@mui/material";
import { useState, MouseEvent } from "react";

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  sortOrder: string;
}

const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
  const [selector, setSelector] = useState<null | HTMLElement>(null);
  const open = Boolean(selector);
  const handleClickListItem = (e: MouseEvent<HTMLElement>) => {
    setSelector(e.currentTarget);
  };
  const handleClose = () => {
    setSelector(null);
  };
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
    { value: "added", label: "Date added" },
  ];

  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );

  return (
    <Card variant="outlined" sx={{ width: 220, pb: 0 }}>
      <List component="nav" sx={{ p: 0 }}>
        <ListItemButton
          id="lock-button"
          sx={{ pt: 0, pb: 0 }}
          onClick={handleClickListItem}
        >
          <ListItemText
            primary="Order by:"
            secondary={currentSortOrder?.label || "Relevance"}
          />
        </ListItemButton>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={selector}
        open={open}
        onClose={handleClose}
      >
        {sortOrders.map((order) => (
          <MenuItem
            sx={{ width: 220 }}
            onClick={() => onSelectSortOrder(order.value)}
            key={order.value}
            value={order.value}
          >
            {order.label}
          </MenuItem>
        ))}
      </Menu>
    </Card>
  );
};

export default SortSelector;
