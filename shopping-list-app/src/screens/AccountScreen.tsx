import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from "react-native";

const AccountScreen = () => {
  const handlePress = (option: string) => {
    console.log(`Pressed ${option}`);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
        <View style={styles.profileSection}>
          <Image source={{ uri: "https://via.placeholder.com/80" }} style={styles.profileImage} />
          <View>
            <Text style={styles.profileName}>John Doe</Text>
            <Text style={styles.profileEmail}>john.doe@example.com</Text>
          </View>
        </View>

        {/* Settings Options */}
        {[{ title: "Account Info" }, { title: "Notifications" }, { title: "Help & Support" }, { title: "Logout", danger: true }].map((item, index) => (
          <TouchableOpacity key={index} style={[styles.option, item.danger && styles.optionDanger]} onPress={() => handlePress(item.title)}>
            <Text style={[styles.optionText, item.danger && styles.optionTextDanger]}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
    backgroundColor: "#FAF7EF"
  },
  header: {
    fontSize: 28,
    fontWeight: "700",
    color: "#1C2E44",
    marginBottom: 30
  },
  profileSection: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5EFD9",
    padding: 20,
    borderRadius: 12,
    marginBottom: 25,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 8,
    elevation: 4
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 20
  },
  profileName: {
    fontSize: 22,
    fontWeight: "700",
    color: "#1C2E44"
  },
  profileEmail: {
    fontSize: 14,
    color: "#617D98",
    marginTop: 6
  },
  option: {
    backgroundColor: "#FFF",
    paddingVertical: 18,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 2
  },
  optionDanger: {
    backgroundColor: "#FDECEA"
  },
  optionText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1C2E44"
  },
  optionTextDanger: {
    color: "#E53935"
  }
});
