import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal, StyleSheet } from "react-native";
import { getIconForCategory } from "../../constants/categoryIcons";
import PriceText from "../PriceText";
import { ShoppingListItemStyles } from "../../styles/GlobalStyles";

type InventoryItem = {
  id: string;
  name: string;
  price?: number | null;
  category?: string | null;
};

type ShoppingItem = {
  id: string;
  quantity?: number | null;
  totalPrice?: number | null;
  inventoryItem: InventoryItem;
};

type Props = {
  item: ShoppingItem;
  updateItem: (id: string, quantity: number) => void;
  deleteItem: (id: string) => void;
};

const MAX_QUANTITY = 10;

const ShoppingListItem: React.FC<Props> = ({ item, updateItem, deleteItem }) => {
  const [showDeletePrompt, setShowDeletePrompt] = useState(false);
  const [showMaxLimitPopup, setShowMaxLimitPopup] = useState(false);

  const quantity = item.quantity ?? 1;
  const totalPrice = item.totalPrice ?? (item.inventoryItem.price ?? 0) * quantity;
  const category = item.inventoryItem.category ?? "";
  const itemName = item.inventoryItem.name || item.id;

  const IconComponent = getIconForCategory(category);

  const incrementQty = () => {
    const newQty = quantity + 1;
    if (newQty > MAX_QUANTITY) {
      setShowMaxLimitPopup(true);
    } else {
      updateItem(item.id, newQty);
    }
  };

  const decrementQty = () => {
    const newQty = quantity - 1;
    if (newQty <= 0) {
      setShowDeletePrompt(true);
    } else {
      updateItem(item.id, newQty);
    }
  };

  return (
    // <View style={ShoppingListItemStyles.container}>
    <View style={ShoppingListItemStyles.card}>
      <View style={ShoppingListItemStyles.iconWrapper}>
        <IconComponent width={50} height={50} />
      </View>

      <View style={ShoppingListItemStyles.itemInfo}>
        <Text style={ShoppingListItemStyles.itemName}>{itemName}</Text>

        <View style={ShoppingListItemStyles.qtyPriceRow}>
          <View style={ShoppingListItemStyles.qtyRow}>
            <TouchableOpacity disabled={quantity === 0} style={[ShoppingListItemStyles.qtyBtnWrapper, quantity === 0 && { opacity: 0.4 }]} onPress={decrementQty}>
              <Text style={ShoppingListItemStyles.qtyBtn}>-</Text>
            </TouchableOpacity>

            <Text style={ShoppingListItemStyles.qtyText}>{quantity}</Text>

            <TouchableOpacity style={ShoppingListItemStyles.qtyBtnWrapper} onPress={incrementQty}>
              <Text style={ShoppingListItemStyles.qtyBtn}>+</Text>
            </TouchableOpacity>
          </View>

          <Text style={ShoppingListItemStyles.price}>
            <PriceText amount={totalPrice} />
          </Text>
        </View>
      </View>

      <TouchableOpacity style={ShoppingListItemStyles.removeBtn} onPress={() => setShowDeletePrompt(true)}>
        <Text style={ShoppingListItemStyles.removeText}>x</Text>
      </TouchableOpacity>

      <Modal transparent visible={showDeletePrompt} animationType="fade">
        <View style={ShoppingListItemStyles.overlay}>
          <View style={ShoppingListItemStyles.deletePromptBox}>
            <Text style={ShoppingListItemStyles.deletePromptText}>Do you want to delete this item?</Text>
            <View style={ShoppingListItemStyles.promptButtons}>
              <TouchableOpacity
                style={ShoppingListItemStyles.promptBtnConfirm}
                onPress={() => {
                  deleteItem(item.id);
                  setShowDeletePrompt(false);
                }}
              >
                <Text style={ShoppingListItemStyles.promptBtnText}>Yes</Text>
              </TouchableOpacity>

              <TouchableOpacity style={ShoppingListItemStyles.promptBtnCancel} onPress={() => setShowDeletePrompt(false)}>
                <Text style={ShoppingListItemStyles.promptBtnText}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <Modal visible={showMaxLimitPopup} transparent animationType="fade">
        <View style={ShoppingListItemStyles.overlay}>
          <View style={ShoppingListItemStyles.popupBox}>
            <Text style={ShoppingListItemStyles.popupText}>
              Do you really need {quantity} {itemName}?!?
            </Text>
            <TouchableOpacity onPress={() => setShowMaxLimitPopup(false)} style={ShoppingListItemStyles.popupCloseBtn}>
              <Text style={ShoppingListItemStyles.popupCloseText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
    // </View>
  );
};

export default ShoppingListItem;
