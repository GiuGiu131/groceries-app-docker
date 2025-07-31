import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal } from "react-native";
import { getIconForCategory } from "../../constants/categoryIcons";
import PriceText from "../PriceText";
import { ShoppingListStyles } from "../../styles/GlobalStyles";

type InventoryItem = {
  id: string;
  name: string;
  price: number | null | undefined;
  category: string | null | undefined;
};

type ShoppingItem = {
  id: string;
  quantity: number | null | undefined;
  totalPrice: number | null | undefined;
  inventoryItem: InventoryItem;
};

type Props = {
  item: ShoppingItem;
  updateItem: (id: string, quantity: number) => void;
  deleteItem: (id: string) => void;
};

const ShoppingListItem: React.FC<Props> = ({ item, updateItem, deleteItem }) => {
  const [showDeletePrompt, setShowDeletePrompt] = useState(false);
  const quantity = item.quantity ?? 1;
  const totalPrice = item.totalPrice ?? 0;
  const category = item.inventoryItem.category ?? "";

  const IconComponent = getIconForCategory(category);

  return (
    <View style={ShoppingListStyles.card}>
      <View style={ShoppingListStyles.iconWrapper}>
        <IconComponent width={50} height={50} />
      </View>

      <View style={ShoppingListStyles.itemInfo}>
        <Text style={ShoppingListStyles.itemName}>{item.inventoryItem.name}</Text>

        <View style={ShoppingListStyles.qtyPriceRow}>
          <View style={ShoppingListStyles.qtyRow}>
            <TouchableOpacity style={ShoppingListStyles.qtyBtnWrapper} onPress={() => updateItem(item.id, quantity + 1)}>
              <Text style={ShoppingListStyles.qtyBtn}>+</Text>
            </TouchableOpacity>

            <Text style={ShoppingListStyles.qtyText}>{quantity}</Text>

            <TouchableOpacity
              disabled={quantity === 0}
              style={[ShoppingListStyles.qtyBtnWrapper, quantity === 0 && { opacity: 0.4 }]}
              onPress={() => {
                if (quantity - 1 === 0) {
                  // Set quantity to 0 in state/store
                  updateItem(item.id, 0);
                  setShowDeletePrompt(true);
                } else {
                  updateItem(item.id, quantity - 1);
                }
              }}
            >
              <Text style={ShoppingListStyles.qtyBtn}>-</Text>
            </TouchableOpacity>
          </View>

          <Text style={ShoppingListStyles.price}>
            <PriceText amount={totalPrice} />
          </Text>
        </View>
      </View>

      <TouchableOpacity style={ShoppingListStyles.removeBtn} onPress={() => deleteItem(item.id)}>
        <Text style={ShoppingListStyles.removeText}>x</Text>
      </TouchableOpacity>
      {/* message on 0 */}
      <Modal transparent visible={showDeletePrompt} animationType="fade">
        <View style={ShoppingListStyles.overlay}>
          <View style={ShoppingListStyles.deletePromptBox}>
            <Text style={ShoppingListStyles.deletePromptText}>Do you want to delete this item?</Text>
            <View style={ShoppingListStyles.promptButtons}>
              <TouchableOpacity
                style={ShoppingListStyles.promptBtnConfirm}
                onPress={() => {
                  deleteItem(item.id);
                  setShowDeletePrompt(false);
                }}
              >
                <Text style={ShoppingListStyles.promptBtnText}>Yes</Text>
              </TouchableOpacity>

              <TouchableOpacity style={ShoppingListStyles.promptBtnCancel} onPress={() => setShowDeletePrompt(false)}>
                <Text style={ShoppingListStyles.promptBtnText}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ShoppingListItem;
