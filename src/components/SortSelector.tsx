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
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClickListItem = (e: MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "added", label: "Date added" },
    { value: "-name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );

  return (
    <Card variant="outlined" sx={{ width: 220, pb: 0 }}>
      <List component="nav" sx={{ p: 0 }}>
        <ListItemButton id="lock-button" onClick={handleClickListItem}>
          <ListItemText
            primary="Order by:"
            secondary={currentSortOrder?.label || "Relevance"}
          />
        </ListItemButton>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
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
