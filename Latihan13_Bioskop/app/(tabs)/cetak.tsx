import { router, useLocalSearchParams } from "expo-router";
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function Cetak() {
  const params = useLocalSearchParams();
  const {
    namaPemesan,
    title,
    harga,
    jam,
    jumlahTiket,
    nomorKursi,
    totalBayar,
  } = params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.ticket}>
        <Text style={styles.title}>TIKET BIOSKOP</Text>
        <View style={styles.divider} />

        <View style={styles.row}>
          <Text style={styles.label}>Film</Text>
          <Text style={styles.value}>{title || "-"}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Jam Tayang</Text>
          <Text style={styles.value}>{jam || "-"}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Nama Pemesan</Text>
          <Text style={styles.value}>{namaPemesan || "-"}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Jumlah Tiket</Text>
          <Text style={styles.value}>{jumlahTiket || "0"}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Nomor Kursi</Text>
          <Text style={styles.value}>{nomorKursi || "-"}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Harga per Tiket</Text>
          <Text style={styles.value}>
            Rp {Number(harga || 0).toLocaleString("id-ID")}
          </Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.totalRow}>
          <Text style={styles.totalLabel}>TOTAL BAYAR</Text>
          <Text style={styles.totalValue}>
            Rp {Number(totalBayar || 0).toLocaleString("id-ID")}
          </Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.qrPlaceholder}>
          <Text style={styles.qrText}>QR CODE</Text>
          <Text style={styles.qrSubtext}>Scan untuk validasi tiket</Text>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Terima kasih telah memesan tiket di Bioskop Kami
          </Text>
          <Text style={styles.footerSubtext}>Selamat menonton!</Text>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.back()}
        >
          <Text style={styles.buttonText}>Kembali ke Pemesanan</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#020617",
    padding: 20,
  },
  ticket: {
    backgroundColor: "#0f172a",
    borderRadius: 20,
    padding: 25,
    borderWidth: 2,
    borderColor: "#1e293b",
    marginVertical: 20,
    shadowColor: "#0284c7",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 8,
  },
  title: {
    color: "#ffffff",
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 5,
  },
  divider: {
    height: 2,
    backgroundColor: "#1e293b",
    marginVertical: 15,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
  },
  label: {
    color: "#94a3b8",
    fontSize: 14,
    fontWeight: "500",
  },
  value: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
    maxWidth: "60%",
    textAlign: "right",
  },
  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
  },
  totalLabel: {
    color: "#bae6fd",
    fontSize: 18,
    fontWeight: "bold",
  },
  totalValue: {
    color: "#38bdf8",
    fontSize: 24,
    fontWeight: "bold",
  },
  qrPlaceholder: {
    backgroundColor: "#020617",
    borderRadius: 12,
    padding: 20,
    alignItems: "center",
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#1e293b",
  },
  qrText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
  qrSubtext: {
    color: "#64748b",
    fontSize: 12,
    marginTop: 5,
  },
  footer: {
    marginVertical: 15,
    alignItems: "center",
  },
  footerText: {
    color: "#94a3b8",
    fontSize: 13,
    textAlign: "center",
  },
  footerSubtext: {
    color: "#38bdf8",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 5,
  },
  button: {
    backgroundColor: "#0284c7",
    padding: 15,
    borderRadius: 14,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 16,
  },
});