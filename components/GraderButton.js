import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const GRADING_TABLE = [
  { company: "PSA", ten: "55/45", nine: "60/40", eight: "65/35" },
  { company: "BGS", ten: "50/50", nine: "60/40", eight: "65/35" },
  { company: "CGC", ten: "55/45", nine: "60/40", eight: "65/35" },
  { company: "SGC", ten: "55/45", nine: "60/40", eight: "65/35" },
];

const GraderButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={() => setOpen(!open)}>
        <Text style={{ color: "white" }}>Show Grading Table</Text>
      </TouchableOpacity>
      {open && (
        <View style={styles.dropdown}>
          <View style={styles.tableHeader}>
            <Text style={styles.cell}>Company</Text>
            <Text style={styles.cell}>10</Text>
            <Text style={styles.cell}>9</Text>
            <Text style={styles.cell}>8</Text>
          </View>
          {GRADING_TABLE.map((row) => (
            <View style={styles.tableRow} key={row.company}>
              <Text style={styles.cell}>{row.company}</Text>
              <Text style={styles.cell}>{row.ten}</Text>
              <Text style={styles.cell}>{row.nine}</Text>
              <Text style={styles.cell}>{row.eight}</Text>
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 8,
    paddingVertical: 8,
    backgroundColor: '#484C61',
    borderRadius: 12,
    flexDirection: 'row',
    margin: 10,
    alignSelf: 'center',
    top: 120,
    zIndex: 2,
  },
  dropdown: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 10,
    marginTop: 5,
    elevation: 6,
    zIndex: 3, 
    position: 'absolute', // make it overlay
    top: 175, 
    alignSelf: 'center',
    width: 320,
  },
  tableHeader: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#ccc",
    paddingBottom: 4,
    marginBottom: 4,
  },
  tableRow: {
    flexDirection: "row",
    marginBottom: 2,
  },
  cell: {
    flex: 1,
    fontSize: 14,
    textAlign: "center",
  },
});

export default GraderButton;