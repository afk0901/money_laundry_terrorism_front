import React from "react";
import { Document, Page, Text, StyleSheet, View } from "@react-pdf/renderer";

type KYCPDFProps = {
  email: string;
  customer_employment: string;
  origin_of_funds: string;
  purpose_of_business: string;
  political_connection_description: string;
  is_real_owner: boolean;
  has_political_connections: boolean;
  submitted_at: Date;
};

const styles = StyleSheet.create({
  page: { padding: 32, fontSize: 11, fontFamily: "Helvetica" },
  title: { fontSize: 18, marginBottom: 6 },
  subtitle: { fontSize: 10, color: "#666", marginBottom: 16 },
  section: { marginTop: 14 },
  sectionTitle: { fontSize: 12, marginBottom: 8 },
  row: { flexDirection: "row", marginBottom: 6 },
  label: { width: 180, fontWeight: 700 },
  value: { flex: 1 },
  box: { borderWidth: 1, borderColor: "#ddd", padding: 10 },
  muted: { color: "#666", marginTop: 12 },
});

const yesNo = (value: boolean) => (value ? "Já" : "Nei");

export default function KYCPDF({
  email,
  customer_employment,
  origin_of_funds,
  purpose_of_business,
  political_connection_description,
  is_real_owner,
  has_political_connections,
  submitted_at,
}: KYCPDFProps) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.title}>KYC - Yfirlýsing kaupanda</Text>
        <Text style={styles.subtitle}>
          Skjal þetta endurspeglar upplýsingar eins og kaupandi lýsti þeim við
          innsendingu.
        </Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Grunnupplýsingar</Text>
          <View style={styles.box}>
            <View style={styles.row}>
              <Text style={styles.label}>Netfang</Text>
              <Text style={styles.value}>{email}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Atvinna / starfsemi</Text>
              <Text style={styles.value}>{customer_employment}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Tilgangur viðskipta</Text>
              <Text style={styles.value}>{purpose_of_business}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Uppruni fjármuna</Text>
              <Text style={styles.value}>{origin_of_funds}</Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Yfirlýsingar</Text>
          <View style={styles.box}>
            <View style={styles.row}>
              <Text style={styles.label}>Raunverulegur eigandi</Text>
              <Text style={styles.value}>{yesNo(is_real_owner)}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Pólitísk tengsl</Text>
              <Text style={styles.value}>
                {yesNo(has_political_connections)}
              </Text>
            </View>

            {has_political_connections && (
              <View style={styles.row}>
                <Text style={styles.label}>Lýsing á pólitískum tengslum</Text>
                <Text style={styles.value}>
                  {has_political_connections
                    ? political_connection_description
                    : "Engin"}
                </Text>
              </View>
            )}
          </View>
        </View>

        <Text style={styles.muted}>
          Innsent þann: {submitted_at.toLocaleDateString()}
        </Text>
        <Text style={styles.muted}>
          Þetta skjal er óbreytanleg samantekt yfirlýsinga kaupanda. Staðfesting
          og samþykki fer fram í sér yfirferðarferli.
        </Text>
      </Page>
    </Document>
  );
}
