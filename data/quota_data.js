    let airport_airline_quota = `
    [
        {"Airport_Airline": "ATH-A3", "Quota": "100", "Quarter": "2023-Q2"},
{"Airport_Airline": "CDG-AF", "Quota": "200", "Quarter": "2023-Q2"},
{"Airport_Airline": "HEL-AY", "Quota": "100", "Quarter": "2023-Q2"},
{"Airport_Airline": "LHR-BA", "Quota": "200", "Quarter": "2023-Q2"},
{"Airport_Airline": "RIX-BT", "Quota": "100", "Quarter": "2023-Q2"},
{"Airport_Airline": "TLV-BZ", "Quota": "50", "Quarter": "2023-Q2"},
{"Airport_Airline": "CKG-CA", "Quota": "100", "Quarter": "2023-Q2"},
{"Airport_Airline": "ARN-DY", "Quota": "50", "Quarter": "2023-Q2"},
{"Airport_Airline": "CPH-DY", "Quota": "50", "Quarter": "2023-Q2"},
{"Airport_Airline": "OSL-DY", "Quota": "100", "Quarter": "2023-Q2"},
{"Airport_Airline": "BSL-EC", "Quota": "50", "Quarter": "2023-Q2"},
{"Airport_Airline": "GVA-EC", "Quota": "50", "Quarter": "2023-Q2"},
{"Airport_Airline": "LGW-EC", "Quota": "50", "Quarter": "2023-Q2"},
{"Airport_Airline": "DUB-EI", "Quota": "200", "Quarter": "2023-Q2"},
{"Airport_Airline": "DXB-EK", "Quota": "200", "Quarter": "2023-Q2"},
{"Airport_Airline": "CGN-EW", "Quota": "100", "Quarter": "2023-Q2"},
{"Airport_Airline": "DUS-EW", "Quota": "100", "Quarter": "2023-Q2"},
{"Airport_Airline": "HAM-EW", "Quota": "100", "Quarter": "2023-Q2"},
{"Airport_Airline": "STR-EW", "Quota": "100", "Quarter": "2023-Q2"},
{"Airport_Airline": "PVG-FM", "Quota": "200", "Quarter": "2023-Q2"},
{"Airport_Airline": "AGP-FR", "Quota": "18", "Quarter": "2023-Q2"},
{"Airport_Airline": "AHO-FR", "Quota": "4", "Quarter": "2023-Q2"},
{"Airport_Airline": "AMM-FR", "Quota": "50", "Quarter": "2023-Q2"},
{"Airport_Airline": "ARN-FR", "Quota": "50", "Quarter": "2023-Q2"},
{"Airport_Airline": "ATH-FR", "Quota": "50", "Quarter": "2023-Q2"},
{"Airport_Airline": "BCN-FR", "Quota": "50", "Quarter": "2023-Q2"},
{"Airport_Airline": "BER-FR", "Quota": "50", "Quarter": "2023-Q2"},
{"Airport_Airline": "BFS-FR", "Quota": "100", "Quarter": "2023-Q2"},
{"Airport_Airline": "BGY-FR", "Quota": "50", "Quarter": "2023-Q2"},
{"Airport_Airline": "BLL-FR", "Quota": "50", "Quarter": "2023-Q2"},
{"Airport_Airline": "BLQ-FR", "Quota": "50", "Quarter": "2023-Q2"},
{"Airport_Airline": "BOH-FR", "Quota": "50", "Quarter": "2023-Q2"},
{"Airport_Airline": "BOJ-FR", "Quota": "50", "Quarter": "2023-Q2"},
{"Airport_Airline": "BRI-FR", "Quota": "50", "Quarter": "2023-Q2"},
{"Airport_Airline": "BRS-FR", "Quota": "50", "Quarter": "2023-Q2"},
{"Airport_Airline": "BVA-FR", "Quota": "50", "Quarter": "2023-Q2"},
{"Airport_Airline": "CAG-FR", "Quota": "50", "Quarter": "2023-Q2"},
{"Airport_Airline": "CFU-FR", "Quota": "7", "Quarter": "2023-Q2"},
{"Airport_Airline": "CHQ-FR", "Quota": "5", "Quarter": "2023-Q2"},
{"Airport_Airline": "CIA-FR", "Quota": "50", "Quarter": "2023-Q2"},
{"Airport_Airline": "CPH-FR", "Quota": "50", "Quarter": "2023-Q2"},
{"Airport_Airline": "CRL-FR", "Quota": "50", "Quarter": "2023-Q2"},
{"Airport_Airline": "CTA-FR", "Quota": "50", "Quarter": "2023-Q2"},
{"Airport_Airline": "DUB-FR", "Quota": "50", "Quarter": "2023-Q2"},
{"Airport_Airline": "EDI-FR", "Quota": "50", "Quarter": "2023-Q2"},
{"Airport_Airline": "EMA-FR", "Quota": "50", "Quarter": "2023-Q2"},
{"Airport_Airline": "GOT-FR", "Quota": "50", "Quarter": "2023-Q2"},
{"Airport_Airline": "JMK-FR", "Quota": "4", "Quarter": "2023-Q2"},
{"Airport_Airline": "LIS-FR", "Quota": "50", "Quarter": "2023-Q2"},
{"Airport_Airline": "LPA-FR", "Quota": "18", "Quarter": "2023-Q2"},
{"Airport_Airline": "MAD-FR", "Quota": "50", "Quarter": "2023-Q2"},
{"Airport_Airline": "MAN-FR", "Quota": "50", "Quarter": "2023-Q2"},
{"Airport_Airline": "MLA-FR", "Quota": "22", "Quarter": "2023-Q2"},
{"Airport_Airline": "MRS-FR", "Quota": "50", "Quarter": "2023-Q2"},
{"Airport_Airline": "NAP-FR", "Quota": "50", "Quarter": "2023-Q2"},
{"Airport_Airline": "NUE-FR", "Quota": "50", "Quarter": "2023-Q2"},
{"Airport_Airline": "OPO-FR", "Quota": "50", "Quarter": "2023-Q2"},
{"Airport_Airline": "PFO-FR", "Quota": "29", "Quarter": "2023-Q2"},
{"Airport_Airline": "PMI-FR", "Quota": "24", "Quarter": "2023-Q2"},
{"Airport_Airline": "PMO-FR", "Quota": "50", "Quarter": "2023-Q2"},
{"Airport_Airline": "POZ-FR", "Quota": "50", "Quarter": "2023-Q2"},
{"Airport_Airline": "PRG-FR", "Quota": "50", "Quarter": "2023-Q2"},
{"Airport_Airline": "PSA-FR", "Quota": "50", "Quarter": "2023-Q2"},
{"Airport_Airline": "PVK-FR", "Quota": "50", "Quarter": "2023-Q2"},
{"Airport_Airline": "RHO-FR", "Quota": "5", "Quarter": "2023-Q2"},
{"Airport_Airline": "RMI-FR", "Quota": "50", "Quarter": "2023-Q2"},
{"Airport_Airline": "SKG-FR", "Quota": "50", "Quarter": "2023-Q2"},
{"Airport_Airline": "SNN-FR", "Quota": "50", "Quarter": "2023-Q2"},
{"Airport_Airline": "SOF-FR", "Quota": "50", "Quarter": "2023-Q2"},
{"Airport_Airline": "STN-FR", "Quota": "50", "Quarter": "2023-Q2"},
{"Airport_Airline": "TLV-FR", "Quota": "50", "Quarter": "2023-Q2"},
{"Airport_Airline": "TSF-FR", "Quota": "50", "Quarter": "2023-Q2"},
{"Airport_Airline": "VLC-FR", "Quota": "11", "Quarter": "2023-Q2"},
{"Airport_Airline": "WMI-FR", "Quota": "50", "Quarter": "2023-Q2"},
{"Airport_Airline": "ZAD-FR", "Quota": "50", "Quarter": "2023-Q2"},
{"Airport_Airline": "ZTH-FR", "Quota": "2", "Quarter": "2023-Q2"},
{"Airport_Airline": "DXB-FZ", "Quota": "100", "Quarter": "2023-Q2"},
{"Airport_Airline": "MAD-IB", "Quota": "100", "Quarter": "2023-Q2"},
{"Airport_Airline": "BEG-JU", "Quota": "200", "Quarter": "2023-Q2"},
{"Airport_Airline": "ICN-KE", "Quota": "150", "Quarter": "2023-Q2"},
{"Airport_Airline": "AMS-KL", "Quota": "200", "Quarter": "2023-Q2"},
{"Airport_Airline": "CLJ-KS", "Quota": "100", "Quarter": "2023-Q2"},
{"Airport_Airline": "OTP-KS", "Quota": "100", "Quarter": "2023-Q2"},
{"Airport_Airline": "KWI-KU", "Quota": "100", "Quarter": "2023-Q2"},
{"Airport_Airline": "LUX-LG", "Quota": "100", "Quarter": "2023-Q2"},
{"Airport_Airline": "FRA-LH", "Quota": "200", "Quarter": "2023-Q2"},
{"Airport_Airline": "MUC-LH", "Quota": "100", "Quarter": "2023-Q2"},
{"Airport_Airline": "ICN-LO", "Quota": "150", "Quarter": "2023-Q2"},
{"Airport_Airline": "WAW-LO", "Quota": "150", "Quarter": "2023-Q2"},
{"Airport_Airline": "BHX-LS", "Quota": "50", "Quarter": "2023-Q2"},
{"Airport_Airline": "LBA-LS", "Quota": "50", "Quarter": "2023-Q2"},
{"Airport_Airline": "MAN-LS", "Quota": "50", "Quarter": "2023-Q2"},
{"Airport_Airline": "ZRH-LX", "Quota": "150", "Quarter": "2023-Q2"},
{"Airport_Airline": "TLV-LY", "Quota": "100", "Quarter": "2023-Q2"},
{"Airport_Airline": "CAI-MS", "Quota": "100", "Quarter": "2023-Q2"},
{"Airport_Airline": "VIE-OS", "Quota": "150", "Quarter": "2023-Q2"},
{"Airport_Airline": "SAW-PC", "Quota": "100", "Quarter": "2023-Q2"},
{"Airport_Airline": "DOH-QR", "Quota": "150", "Quarter": "2023-Q2"},
{"Airport_Airline": "OTP-RO", "Quota": "100", "Quarter": "2023-Q2"},
{"Airport_Airline": "HRG-SM", "Quota": "50", "Quarter": "2023-Q2"},
{"Airport_Airline": "BRU-SN", "Quota": "100", "Quarter": "2023-Q2"},
{"Airport_Airline": "IST-TK", "Quota": "200", "Quarter": "2023-Q2"},
{"Airport_Airline": "SAW-TK", "Quota": "100", "Quarter": "2023-Q2"},
{"Airport_Airline": "CLJ-W2", "Quota": "50", "Quarter": "2023-Q2"},
{"Airport_Airline": "AGP-W6", "Quota": "30", "Quarter": "2023-Q2"},
{"Airport_Airline": "AHO-W6", "Quota": "2", "Quarter": "2023-Q2"},
{"Airport_Airline": "ALC-W6", "Quota": "25", "Quarter": "2023-Q2"},
{"Airport_Airline": "AMM-W6", "Quota": "50", "Quarter": "2023-Q2"},
{"Airport_Airline": "ATH-W6", "Quota": "50", "Quarter": "2023-Q2"},
{"Airport_Airline": "AUH-W6", "Quota": "50", "Quarter": "2023-Q2"},
{"Airport_Airline": "AYT-W6", "Quota": "50", "Quarter": "2023-Q2"},
{"Airport_Airline": "BCN-W6", "Quota": "50", "Quarter": "2023-Q2"},
{"Airport_Airline": "BER-W6", "Quota": "50", "Quarter": "2023-Q2"},
{"Airport_Airline": "BHX-W6", "Quota": "50", "Quarter": "2023-Q2"},
{"Airport_Airline": "BOJ-W6", "Quota": "50", "Quarter": "2023-Q2"},
{"Airport_Airline": "BRI-W6", "Quota": "50", "Quarter": "2023-Q2"},
{"Airport_Airline": "BSL-W6", "Quota": "50", "Quarter": "2023-Q2"},
{"Airport_Airline": "CDT-W6", "Quota": "16", "Quarter": "2023-Q2"},
{"Airport_Airline": "CFU-W6", "Quota": "4", "Quarter": "2023-Q2"},
{"Airport_Airline": "CHQ-W6", "Quota": "2", "Quarter": "2023-Q2"},
{"Airport_Airline": "CRL-W6", "Quota": "50", "Quarter": "2023-Q2"},
{"Airport_Airline": "CTA-W6", "Quota": "50", "Quarter": "2023-Q2"},
{"Airport_Airline": "DMM-W6", "Quota": "100", "Quarter": "2023-Q2"},
{"Airport_Airline": "DTM-W6", "Quota": "50", "Quarter": "2023-Q2"},
{"Airport_Airline": "DXB-W6", "Quota": "50", "Quarter": "2023-Q2"},
{"Airport_Airline": "EDI-W6", "Quota": "50", "Quarter": "2023-Q2"},
{"Airport_Airline": "EIN-W6", "Quota": "50", "Quarter": "2023-Q2"},
{"Airport_Airline": "FCO-W6", "Quota": "50", "Quarter": "2023-Q2"},
{"Airport_Airline": "FNC-W6", "Quota": "50", "Quarter": "2023-Q2"},
{"Airport_Airline": "GYD-W6", "Quota": "50", "Quarter": "2023-Q2"},
{"Airport_Airline": "HER-W6", "Quota": "4", "Quarter": "2023-Q2"},
{"Airport_Airline": "HRG-W6", "Quota": "50", "Quarter": "2023-Q2"},
{"Airport_Airline": "IST-W6", "Quota": "100", "Quarter": "2023-Q2"},
{"Airport_Airline": "JED-W6", "Quota": "50", "Quarter": "2023-Q2"},
{"Airport_Airline": "JTR-W6", "Quota": "3", "Quarter": "2023-Q2"},
{"Airport_Airline": "KEF-W6", "Quota": "50", "Quarter": "2023-Q2"},
{"Airport_Airline": "KUT-W6", "Quota": "50", "Quarter": "2023-Q2"},
{"Airport_Airline": "LCA-W6", "Quota": "50", "Quarter": "2023-Q2"},
{"Airport_Airline": "LGW-W6", "Quota": "50", "Quarter": "2023-Q2"},
{"Airport_Airline": "LIS-W6", "Quota": "50", "Quarter": "2023-Q2"},
{"Airport_Airline": "LPL-W6", "Quota": "50", "Quarter": "2023-Q2"},
{"Airport_Airline": "LTN-W6", "Quota": "50", "Quarter": "2023-Q2"},
{"Airport_Airline": "MAD-W6", "Quota": "50", "Quarter": "2023-Q2"},
{"Airport_Airline": "MLA-W6", "Quota": "20", "Quarter": "2023-Q2"},
{"Airport_Airline": "MMX-W6", "Quota": "50", "Quarter": "2023-Q2"},
{"Airport_Airline": "MXP-W6", "Quota": "50", "Quarter": "2023-Q2"},
{"Airport_Airline": "NAP-W6", "Quota": "50", "Quarter": "2023-Q2"},
{"Airport_Airline": "NCE-W6", "Quota": "50", "Quarter": "2023-Q2"},
{"Airport_Airline": "NYO-W6", "Quota": "50", "Quarter": "2023-Q2"},
{"Airport_Airline": "ORY-W6", "Quota": "50", "Quarter": "2023-Q2"},
{"Airport_Airline": "PMI-W6", "Quota": "5", "Quarter": "2023-Q2"},
{"Airport_Airline": "RHO-W6", "Quota": "3", "Quarter": "2023-Q2"},
{"Airport_Airline": "RUH-W6", "Quota": "50", "Quarter": "2023-Q2"},
{"Airport_Airline": "SKG-W6", "Quota": "50", "Quarter": "2023-Q2"},
{"Airport_Airline": "SKP-W6", "Quota": "50", "Quarter": "2023-Q2"},
{"Airport_Airline": "TFS-W6", "Quota": "82", "Quarter": "2023-Q2"},
{"Airport_Airline": "TGD-W6", "Quota": "50", "Quarter": "2023-Q2"},
{"Airport_Airline": "TGM-W6", "Quota": "50", "Quarter": "2023-Q2"},
{"Airport_Airline": "TIA-W6", "Quota": "50", "Quarter": "2023-Q2"},
{"Airport_Airline": "TLV-W6", "Quota": "50", "Quarter": "2023-Q2"},
{"Airport_Airline": "WAW-W6", "Quota": "50", "Quarter": "2023-Q2"},
{"Airport_Airline": "ZTH-W6", "Quota": "5", "Quarter": "2023-Q2"},
{"Airport_Airline": "ADB-XQ", "Quota": "50", "Quarter": "2023-Q2"},
{"Airport_Airline": "AYT-XQ", "Quota": "50", "Quarter": "2023-Q2"},


{"Airport_Airline": "ATH-A3", "Quota": "100", "Quarter": "2023-Q3"},
{"Airport_Airline": "CDG-AF", "Quota": "200", "Quarter": "2023-Q3"},
{"Airport_Airline": "HEL-AY", "Quota": "150", "Quarter": "2023-Q3"},
{"Airport_Airline": "LHR-BA", "Quota": "200", "Quarter": "2023-Q3"},
{"Airport_Airline": "RIX-BT", "Quota": "100", "Quarter": "2023-Q3"},
{"Airport_Airline": "CKG-CA", "Quota": "100", "Quarter": "2023-Q3"},
{"Airport_Airline": "PEK-CA", "Quota": "100", "Quarter": "2023-Q3"},
{"Airport_Airline": "ARN-DY", "Quota": "50", "Quarter": "2023-Q3"},
{"Airport_Airline": "CPH-DY", "Quota": "50", "Quarter": "2023-Q3"},
{"Airport_Airline": "OSL-DY", "Quota": "100", "Quarter": "2023-Q3"},
{"Airport_Airline": "BSL-EC", "Quota": "50", "Quarter": "2023-Q3"},
{"Airport_Airline": "GVA-EC", "Quota": "50", "Quarter": "2023-Q3"},
{"Airport_Airline": "LGW-EC", "Quota": "50", "Quarter": "2023-Q3"},
{"Airport_Airline": "DUB-EI", "Quota": "150", "Quarter": "2023-Q3"},
{"Airport_Airline": "DXB-EK", "Quota": "150", "Quarter": "2023-Q3"},
{"Airport_Airline": "CGN-EW", "Quota": "100", "Quarter": "2023-Q3"},
{"Airport_Airline": "DUS-EW", "Quota": "100", "Quarter": "2023-Q3"},
{"Airport_Airline": "HAM-EW", "Quota": "100", "Quarter": "2023-Q3"},
{"Airport_Airline": "STR-EW", "Quota": "100", "Quarter": "2023-Q3"},
{"Airport_Airline": "PVG-FM", "Quota": "200", "Quarter": "2023-Q3"},
{"Airport_Airline": "NGB-FM", "Quota": "200", "Quarter": "2023-Q3"},
{"Airport_Airline": "LPA-FR", "Quota": "50", "Quarter": "2023-Q3"},
{"Airport_Airline": "AHO-FR", "Quota": "8", "Quarter": "2023-Q3"},
{"Airport_Airline": "CFU-FR", "Quota": "8", "Quarter": "2023-Q3"},
{"Airport_Airline": "CHQ-FR", "Quota": "9", "Quarter": "2023-Q3"},
{"Airport_Airline": "JMK-FR", "Quota": "8", "Quarter": "2023-Q3"},
{"Airport_Airline": "MLA-FR", "Quota": "8", "Quarter": "2023-Q3"},
{"Airport_Airline": "PFO-FR", "Quota": "9", "Quarter": "2023-Q3"},
{"Airport_Airline": "PMI-FR", "Quota": "8", "Quarter": "2023-Q3"},
{"Airport_Airline": "RHO-FR", "Quota": "8", "Quarter": "2023-Q3"},
{"Airport_Airline": "ZTH-FR", "Quota": "9", "Quarter": "2023-Q3"},
{"Airport_Airline": "AGP-FR", "Quota": "20", "Quarter": "2023-Q3"},
{"Airport_Airline": "VLC-FR", "Quota": "20", "Quarter": "2023-Q3"},
{"Airport_Airline": "AMM-FR", "Quota": "50", "Quarter": "2023-Q3"},
{"Airport_Airline": "ARN-FR", "Quota": "50", "Quarter": "2023-Q3"},
{"Airport_Airline": "ATH-FR", "Quota": "50", "Quarter": "2023-Q3"},
{"Airport_Airline": "BCN-FR", "Quota": "50", "Quarter": "2023-Q3"},
{"Airport_Airline": "BER-FR", "Quota": "50", "Quarter": "2023-Q3"},
{"Airport_Airline": "BFS-FR", "Quota": "50", "Quarter": "2023-Q3"},
{"Airport_Airline": "BGY-FR", "Quota": "50", "Quarter": "2023-Q3"},
{"Airport_Airline": "BLL-FR", "Quota": "50", "Quarter": "2023-Q3"},
{"Airport_Airline": "BLQ-FR", "Quota": "50", "Quarter": "2023-Q3"},
{"Airport_Airline": "BOH-FR", "Quota": "50", "Quarter": "2023-Q3"},
{"Airport_Airline": "BOJ-FR", "Quota": "50", "Quarter": "2023-Q3"},
{"Airport_Airline": "BRI-FR", "Quota": "50", "Quarter": "2023-Q3"},
{"Airport_Airline": "BRS-FR", "Quota": "50", "Quarter": "2023-Q3"},
{"Airport_Airline": "BVA-FR", "Quota": "50", "Quarter": "2023-Q3"},
{"Airport_Airline": "CAG-FR", "Quota": "50", "Quarter": "2023-Q3"},
{"Airport_Airline": "CIA-FR", "Quota": "50", "Quarter": "2023-Q3"},
{"Airport_Airline": "CPH-FR", "Quota": "50", "Quarter": "2023-Q3"},
{"Airport_Airline": "CRL-FR", "Quota": "50", "Quarter": "2023-Q3"},
{"Airport_Airline": "CTA-FR", "Quota": "50", "Quarter": "2023-Q3"},
{"Airport_Airline": "DUB-FR", "Quota": "50", "Quarter": "2023-Q3"},
{"Airport_Airline": "EDI-FR", "Quota": "50", "Quarter": "2023-Q3"},
{"Airport_Airline": "EMA-FR", "Quota": "50", "Quarter": "2023-Q3"},
{"Airport_Airline": "GOT-FR", "Quota": "50", "Quarter": "2023-Q3"},
{"Airport_Airline": "LIS-FR", "Quota": "50", "Quarter": "2023-Q3"},
{"Airport_Airline": "MAD-FR", "Quota": "50", "Quarter": "2023-Q3"},
{"Airport_Airline": "MAN-FR", "Quota": "50", "Quarter": "2023-Q3"},
{"Airport_Airline": "MRS-FR", "Quota": "50", "Quarter": "2023-Q3"},
{"Airport_Airline": "NAP-FR", "Quota": "50", "Quarter": "2023-Q3"},
{"Airport_Airline": "NUE-FR", "Quota": "50", "Quarter": "2023-Q3"},
{"Airport_Airline": "OPO-FR", "Quota": "50", "Quarter": "2023-Q3"},
{"Airport_Airline": "PMO-FR", "Quota": "50", "Quarter": "2023-Q3"},
{"Airport_Airline": "POZ-FR", "Quota": "50", "Quarter": "2023-Q3"},
{"Airport_Airline": "PRG-FR", "Quota": "50", "Quarter": "2023-Q3"},
{"Airport_Airline": "PSA-FR", "Quota": "50", "Quarter": "2023-Q3"},
{"Airport_Airline": "PVK-FR", "Quota": "50", "Quarter": "2023-Q3"},
{"Airport_Airline": "RMI-FR", "Quota": "50", "Quarter": "2023-Q3"},
{"Airport_Airline": "SKG-FR", "Quota": "50", "Quarter": "2023-Q3"},
{"Airport_Airline": "SNN-FR", "Quota": "50", "Quarter": "2023-Q3"},
{"Airport_Airline": "SOF-FR", "Quota": "50", "Quarter": "2023-Q3"},
{"Airport_Airline": "STN-FR", "Quota": "50", "Quarter": "2023-Q3"},
{"Airport_Airline": "TLV-FR", "Quota": "50", "Quarter": "2023-Q3"},
{"Airport_Airline": "TSF-FR", "Quota": "50", "Quarter": "2023-Q3"},
{"Airport_Airline": "WMI-FR", "Quota": "50", "Quarter": "2023-Q3"},
{"Airport_Airline": "ZAD-FR", "Quota": "50", "Quarter": "2023-Q3"},
{"Airport_Airline": "DXB-FZ", "Quota": "100", "Quarter": "2023-Q3"},
{"Airport_Airline": "MAD-IB", "Quota": "100", "Quarter": "2023-Q3"},
{"Airport_Airline": "BEG-JU", "Quota": "150", "Quarter": "2023-Q3"},
{"Airport_Airline": "ICN-KE", "Quota": "150", "Quarter": "2023-Q3"},
{"Airport_Airline": "AMS-KL", "Quota": "150", "Quarter": "2023-Q3"},
{"Airport_Airline": "OTP-KS", "Quota": "100", "Quarter": "2023-Q3"},
{"Airport_Airline": "LUX-LG", "Quota": "100", "Quarter": "2023-Q3"},
{"Airport_Airline": "FRA-LH", "Quota": "150", "Quarter": "2023-Q3"},
{"Airport_Airline": "MUC-LH", "Quota": "150", "Quarter": "2023-Q3"},
{"Airport_Airline": "ICN-LO", "Quota": "150", "Quarter": "2023-Q3"},
{"Airport_Airline": "WAW-LO", "Quota": "150", "Quarter": "2023-Q3"},
{"Airport_Airline": "BHX-LS", "Quota": "50", "Quarter": "2023-Q3"},
{"Airport_Airline": "LBA-LS", "Quota": "50", "Quarter": "2023-Q3"},
{"Airport_Airline": "MAN-LS", "Quota": "50", "Quarter": "2023-Q3"},
{"Airport_Airline": "ZRH-LX", "Quota": "150", "Quarter": "2023-Q3"},
{"Airport_Airline": "TLV-LY", "Quota": "100", "Quarter": "2023-Q3"},
{"Airport_Airline": "CAI-MS", "Quota": "100", "Quarter": "2023-Q3"},
{"Airport_Airline": "VIE-OS", "Quota": "150", "Quarter": "2023-Q3"},
{"Airport_Airline": "SAW-PC", "Quota": "100", "Quarter": "2023-Q3"},
{"Airport_Airline": "DOH-QR", "Quota": "150", "Quarter": "2023-Q3"},
{"Airport_Airline": "OTP-RO", "Quota": "100", "Quarter": "2023-Q3"},
{"Airport_Airline": "HRG-SM", "Quota": "50", "Quarter": "2023-Q3"},
{"Airport_Airline": "BRU-SN", "Quota": "100", "Quarter": "2023-Q3"},
{"Airport_Airline": "IST-TK", "Quota": "200", "Quarter": "2023-Q3"},
{"Airport_Airline": "SAW-TK", "Quota": "100", "Quarter": "2023-Q3"},
{"Airport_Airline": "CLJ-W2", "Quota": "50", "Quarter": "2023-Q3"},
{"Airport_Airline": "TFS-W6", "Quota": "50", "Quarter": "2023-Q3"},
{"Airport_Airline": "AHO-W6", "Quota": "8", "Quarter": "2023-Q3"},
{"Airport_Airline": "CFU-W6", "Quota": "8", "Quarter": "2023-Q3"},
{"Airport_Airline": "CHQ-W6", "Quota": "9", "Quarter": "2023-Q3"},
{"Airport_Airline": "HER-W6", "Quota": "8", "Quarter": "2023-Q3"},
{"Airport_Airline": "JTR-W6", "Quota": "8", "Quarter": "2023-Q3"},
{"Airport_Airline": "MLA-W6", "Quota": "9", "Quarter": "2023-Q3"},
{"Airport_Airline": "PMI-W6", "Quota": "8", "Quarter": "2023-Q3"},
{"Airport_Airline": "RHO-W6", "Quota": "8", "Quarter": "2023-Q3"},
{"Airport_Airline": "ZTH-W6", "Quota": "9", "Quarter": "2023-Q3"},
{"Airport_Airline": "AGP-W6", "Quota": "20", "Quarter": "2023-Q3"},
{"Airport_Airline": "ALC-W6", "Quota": "20", "Quarter": "2023-Q3"},
{"Airport_Airline": "CDT-W6", "Quota": "20", "Quarter": "2023-Q3"},
{"Airport_Airline": "AMM-W6", "Quota": "50", "Quarter": "2023-Q3"},
{"Airport_Airline": "ATH-W6", "Quota": "50", "Quarter": "2023-Q3"},
{"Airport_Airline": "AUH-W6", "Quota": "50", "Quarter": "2023-Q3"},
{"Airport_Airline": "AYT-W6", "Quota": "50", "Quarter": "2023-Q3"},
{"Airport_Airline": "BCN-W6", "Quota": "50", "Quarter": "2023-Q3"},
{"Airport_Airline": "BER-W6", "Quota": "50", "Quarter": "2023-Q3"},
{"Airport_Airline": "BHX-W6", "Quota": "50", "Quarter": "2023-Q3"},
{"Airport_Airline": "BOJ-W6", "Quota": "50", "Quarter": "2023-Q3"},
{"Airport_Airline": "BRI-W6", "Quota": "50", "Quarter": "2023-Q3"},
{"Airport_Airline": "BSL-W6", "Quota": "50", "Quarter": "2023-Q3"},
{"Airport_Airline": "CRL-W6", "Quota": "50", "Quarter": "2023-Q3"},
{"Airport_Airline": "CTA-W6", "Quota": "50", "Quarter": "2023-Q3"},
{"Airport_Airline": "DMM-W6", "Quota": "100", "Quarter": "2023-Q3"},
{"Airport_Airline": "DTM-W6", "Quota": "50", "Quarter": "2023-Q3"},
{"Airport_Airline": "DXB-W6", "Quota": "50", "Quarter": "2023-Q3"},
{"Airport_Airline": "EDI-W6", "Quota": "50", "Quarter": "2023-Q3"},
{"Airport_Airline": "EIN-W6", "Quota": "50", "Quarter": "2023-Q3"},
{"Airport_Airline": "FCO-W6", "Quota": "50", "Quarter": "2023-Q3"},
{"Airport_Airline": "FNC-W6", "Quota": "50", "Quarter": "2023-Q3"},
{"Airport_Airline": "GYD-W6", "Quota": "50", "Quarter": "2023-Q3"},
{"Airport_Airline": "HRG-W6", "Quota": "50", "Quarter": "2023-Q3"},
{"Airport_Airline": "IST-W6", "Quota": "100", "Quarter": "2023-Q3"},
{"Airport_Airline": "JED-W6", "Quota": "50", "Quarter": "2023-Q3"},
{"Airport_Airline": "KEF-W6", "Quota": "50", "Quarter": "2023-Q3"},
{"Airport_Airline": "KUT-W6", "Quota": "50", "Quarter": "2023-Q3"},
{"Airport_Airline": "LCA-W6", "Quota": "50", "Quarter": "2023-Q3"},
{"Airport_Airline": "LGW-W6", "Quota": "50", "Quarter": "2023-Q3"},
{"Airport_Airline": "LIS-W6", "Quota": "50", "Quarter": "2023-Q3"},
{"Airport_Airline": "LPL-W6", "Quota": "50", "Quarter": "2023-Q3"},
{"Airport_Airline": "LTN-W6", "Quota": "50", "Quarter": "2023-Q3"},
{"Airport_Airline": "MAD-W6", "Quota": "50", "Quarter": "2023-Q3"},
{"Airport_Airline": "MMX-W6", "Quota": "50", "Quarter": "2023-Q3"},
{"Airport_Airline": "MXP-W6", "Quota": "50", "Quarter": "2023-Q3"},
{"Airport_Airline": "NAP-W6", "Quota": "50", "Quarter": "2023-Q3"},
{"Airport_Airline": "NCE-W6", "Quota": "50", "Quarter": "2023-Q3"},
{"Airport_Airline": "NYO-W6", "Quota": "50", "Quarter": "2023-Q3"},
{"Airport_Airline": "ORY-W6", "Quota": "50", "Quarter": "2023-Q3"},
{"Airport_Airline": "RUH-W6", "Quota": "50", "Quarter": "2023-Q3"},
{"Airport_Airline": "SKG-W6", "Quota": "50", "Quarter": "2023-Q3"},
{"Airport_Airline": "SKP-W6", "Quota": "50", "Quarter": "2023-Q3"},
{"Airport_Airline": "TGD-W6", "Quota": "50", "Quarter": "2023-Q3"},
{"Airport_Airline": "TGM-W6", "Quota": "50", "Quarter": "2023-Q3"},
{"Airport_Airline": "TIA-W6", "Quota": "50", "Quarter": "2023-Q3"},
{"Airport_Airline": "TLV-W6", "Quota": "50", "Quarter": "2023-Q3"},
{"Airport_Airline": "WAW-W6", "Quota": "50", "Quarter": "2023-Q3"},
{"Airport_Airline": "ADB-XQ", "Quota": "50", "Quarter": "2023-Q3"},
{"Airport_Airline": "AYT-XQ", "Quota": "50", "Quarter": "2023-Q3"},

{
    "Airport_Airline": "ACE-FR",
    "Quarter": "2023-Q4",
    "Quota": 7
},
{
    "Airport_Airline": "ADB-XQ",
    "Quarter": "2023-Q4",
    "Quota": 50
},
{
    "Airport_Airline": "AGP-FR",
    "Quarter": "2023-Q4",
    "Quota": 26
},
{
    "Airport_Airline": "AGP-W6",
    "Quarter": "2023-Q4",
    "Quota": 27
},
{
    "Airport_Airline": "ALC-FR",
    "Quarter": "2023-Q4",
    "Quota": 15
},
{
    "Airport_Airline": "ALC-W6",
    "Quarter": "2023-Q4",
    "Quota": 32
},
{
    "Airport_Airline": "AMM-FR",
    "Quarter": "2023-Q4",
    "Quota": 50
},
{
    "Airport_Airline": "AMM-W6",
    "Quarter": "2023-Q4",
    "Quota": 50
},
{
    "Airport_Airline": "AMS-KL",
    "Quarter": "2023-Q4",
    "Quota": 150
},
{
    "Airport_Airline": "ARN-FR",
    "Quarter": "2023-Q4",
    "Quota": 50
},
{
    "Airport_Airline": "ARN-W6",
    "Quarter": "2023-Q4",
    "Quota": 50
},
{
    "Airport_Airline": "ATH-A3",
    "Quarter": "2023-Q4",
    "Quota": 100
},
{
    "Airport_Airline": "ATH-FR",
    "Quarter": "2023-Q4",
    "Quota": 50
},
{
    "Airport_Airline": "ATH-W6",
    "Quarter": "2023-Q4",
    "Quota": 100
},
{
    "Airport_Airline": "AUH-W6",
    "Quarter": "2023-Q4",
    "Quota": 50
},
{
    "Airport_Airline": "AYT-W6",
    "Quarter": "2023-Q4",
    "Quota": 50
},
{
    "Airport_Airline": "AYT-XQ",
    "Quarter": "2023-Q4",
    "Quota": 100
},
{
    "Airport_Airline": "BCN-FR",
    "Quarter": "2023-Q4",
    "Quota": 50
},
{
    "Airport_Airline": "BCN-W6",
    "Quarter": "2023-Q4",
    "Quota": 50
},
{
    "Airport_Airline": "BEG-JU",
    "Quarter": "2023-Q4",
    "Quota": 100
},
{
    "Airport_Airline": "BER-FR",
    "Quarter": "2023-Q4",
    "Quota": 50
},
{
    "Airport_Airline": "BER-W6",
    "Quarter": "2023-Q4",
    "Quota": 50
},
{
    "Airport_Airline": "BFS-FR",
    "Quarter": "2023-Q4",
    "Quota": 50
},
{
    "Airport_Airline": "BGY-FR",
    "Quarter": "2023-Q4",
    "Quota": 50
},
{
    "Airport_Airline": "BHX-FR",
    "Quarter": "2023-Q4",
    "Quota": 50
},
{
    "Airport_Airline": "BHX-LS",
    "Quarter": "2023-Q4",
    "Quota": 50
},
{
    "Airport_Airline": "BHX-W6",
    "Quarter": "2023-Q4",
    "Quota": 50
},
{
    "Airport_Airline": "BLL-FR",
    "Quarter": "2023-Q4",
    "Quota": 50
},
{
    "Airport_Airline": "BLQ-FR",
    "Quarter": "2023-Q4",
    "Quota": 50
},
{
    "Airport_Airline": "BRI-FR",
    "Quarter": "2023-Q4",
    "Quota": 50
},
{
    "Airport_Airline": "BRI-W6",
    "Quarter": "2023-Q4",
    "Quota": 50
},
{
    "Airport_Airline": "BRS-FR",
    "Quarter": "2023-Q4",
    "Quota": 50
},
{
    "Airport_Airline": "BRU-SN",
    "Quarter": "2023-Q4",
    "Quota": 50
},
{
    "Airport_Airline": "BSL-EC",
    "Quarter": "2023-Q4",
    "Quota": 50
},
{
    "Airport_Airline": "BSL-W6",
    "Quarter": "2023-Q4",
    "Quota": 50
},
{
    "Airport_Airline": "BVA-FR",
    "Quarter": "2023-Q4",
    "Quota": 50
},
{
    "Airport_Airline": "CAG-FR",
    "Quarter": "2023-Q4",
    "Quota": 50
},
{
    "Airport_Airline": "CAI-MS",
    "Quarter": "2023-Q4",
    "Quota": 100
},
{
    "Airport_Airline": "CDG-AF",
    "Quarter": "2023-Q4",
    "Quota": 200
},
{
    "Airport_Airline": "CGN-EW",
    "Quarter": "2023-Q4",
    "Quota": 100
},
{
    "Airport_Airline": "CIA-FR",
    "Quarter": "2023-Q4",
    "Quota": 50
},
{
    "Airport_Airline": "CKG-CA",
    "Quarter": "2023-Q4",
    "Quota": 100
},
{
    "Airport_Airline": "CPH-DY",
    "Quarter": "2023-Q4",
    "Quota": 100
},
{
    "Airport_Airline": "CPH-FR",
    "Quarter": "2023-Q4",
    "Quota": 50
},
{
    "Airport_Airline": "CPH-W6",
    "Quarter": "2023-Q4",
    "Quota": 50
},
{
    "Airport_Airline": "CRL-FR",
    "Quarter": "2023-Q4",
    "Quota": 50
},
{
    "Airport_Airline": "CRL-W6",
    "Quarter": "2023-Q4",
    "Quota": 50
},
{
    "Airport_Airline": "CTA-FR",
    "Quarter": "2023-Q4",
    "Quota": 50
},
{
    "Airport_Airline": "CTA-W6",
    "Quarter": "2023-Q4",
    "Quota": 50
},
{
    "Airport_Airline": "DMM-W6",
    "Quarter": "2023-Q4",
    "Quota": 50
},
{
    "Airport_Airline": "DOH-QR",
    "Quarter": "2023-Q4",
    "Quota": 150
},
{
    "Airport_Airline": "DUB-EI",
    "Quarter": "2023-Q4",
    "Quota": 100
},
{
    "Airport_Airline": "DUB-FR",
    "Quarter": "2023-Q4",
    "Quota": 50
},
{
    "Airport_Airline": "DUS-EW",
    "Quarter": "2023-Q4",
    "Quota": 150
},
{
    "Airport_Airline": "DXB-EK",
    "Quarter": "2023-Q4",
    "Quota": 150
},
{
    "Airport_Airline": "DXB-FZ",
    "Quarter": "2023-Q4",
    "Quota": 100
},
{
    "Airport_Airline": "DXB-W6",
    "Quarter": "2023-Q4",
    "Quota": 50
},
{
    "Airport_Airline": "EDI-FR",
    "Quarter": "2023-Q4",
    "Quota": 50
},
{
    "Airport_Airline": "EDI-W6",
    "Quarter": "2023-Q4",
    "Quota": 50
},
{
    "Airport_Airline": "EIN-W6",
    "Quarter": "2023-Q4",
    "Quota": 50
},
{
    "Airport_Airline": "EMA-FR",
    "Quarter": "2023-Q4",
    "Quota": 50
},
{
    "Airport_Airline": "FCO-W6",
    "Quarter": "2023-Q4",
    "Quota": 50
},
{
    "Airport_Airline": "FNC-W6",
    "Quarter": "2023-Q4",
    "Quota": 23
},
{
    "Airport_Airline": "FRA-LH",
    "Quarter": "2023-Q4",
    "Quota": 150
},
{
    "Airport_Airline": "GOT-FR",
    "Quarter": "2023-Q4",
    "Quota": 50
},
{
    "Airport_Airline": "GVA-EC",
    "Quarter": "2023-Q4",
    "Quota": 100
},
{
    "Airport_Airline": "GYD-W6",
    "Quarter": "2023-Q4",
    "Quota": 50
},
{
    "Airport_Airline": "HAM-EW",
    "Quarter": "2023-Q4",
    "Quota": 150
},
{
    "Airport_Airline": "HEL-AY",
    "Quarter": "2023-Q4",
    "Quota": 150
},
{
    "Airport_Airline": "HRG-SM",
    "Quarter": "2023-Q4",
    "Quota": 50
},
{
    "Airport_Airline": "HRG-W6",
    "Quarter": "2023-Q4",
    "Quota": 50
},
{
    "Airport_Airline": "ICN-KE",
    "Quarter": "2023-Q4",
    "Quota": 100
},
{
    "Airport_Airline": "ICN-LO",
    "Quarter": "2023-Q4",
    "Quota": 100
},
{
    "Airport_Airline": "IST-TK",
    "Quarter": "2023-Q4",
    "Quota": 50
},
{
    "Airport_Airline": "IST-W6",
    "Quarter": "2023-Q4",
    "Quota": 50
},
{
    "Airport_Airline": "JED-W6",
    "Quarter": "2023-Q4",
    "Quota": 50
},
{
    "Airport_Airline": "KEF-W6",
    "Quarter": "2023-Q4",
    "Quota": 50
},
{
    "Airport_Airline": "KUT-W6",
    "Quarter": "2023-Q4",
    "Quota": 50
},
{
    "Airport_Airline": "LBA-LS",
    "Quarter": "2023-Q4",
    "Quota": 50
},
{
    "Airport_Airline": "LCA-W6",
    "Quarter": "2023-Q4",
    "Quota": 34
},
{
    "Airport_Airline": "LGW-EC",
    "Quarter": "2023-Q4",
    "Quota": 100
},
{
    "Airport_Airline": "LGW-W6",
    "Quarter": "2023-Q4",
    "Quota": 50
},
{
    "Airport_Airline": "LHR-BA",
    "Quarter": "2023-Q4",
    "Quota": 200
},
{
    "Airport_Airline": "LIS-FR",
    "Quarter": "2023-Q4",
    "Quota": 50
},
{
    "Airport_Airline": "LIS-W6",
    "Quarter": "2023-Q4",
    "Quota": 50
},
{
    "Airport_Airline": "LPA-FR",
    "Quarter": "2023-Q4",
    "Quota": 19
},
{
    "Airport_Airline": "LPL-W6",
    "Quarter": "2023-Q4",
    "Quota": 50
},
{
    "Airport_Airline": "LTN-W6",
    "Quarter": "2023-Q4",
    "Quota": 50
},
{
    "Airport_Airline": "LUX-LG",
    "Quarter": "2023-Q4",
    "Quota": 50
},
{
    "Airport_Airline": "MAD-FR",
    "Quarter": "2023-Q4",
    "Quota": 50
},
{
    "Airport_Airline": "MAD-IB",
    "Quarter": "2023-Q4",
    "Quota": 100
},
{
    "Airport_Airline": "MAD-W6",
    "Quarter": "2023-Q4",
    "Quota": 50
},
{
    "Airport_Airline": "MAN-FR",
    "Quarter": "2023-Q4",
    "Quota": 50
},
{
    "Airport_Airline": "MAN-LS",
    "Quarter": "2023-Q4",
    "Quota": 50
},
{
    "Airport_Airline": "MLA-FR",
    "Quarter": "2023-Q4",
    "Quota": 26
},
{
    "Airport_Airline": "MLA-W6",
    "Quarter": "2023-Q4",
    "Quota": 23
},
{
    "Airport_Airline": "MRS-FR",
    "Quarter": "2023-Q4",
    "Quota": 50
},
{
    "Airport_Airline": "MUC-LH",
    "Quarter": "2023-Q4",
    "Quota": 150
},
{
    "Airport_Airline": "MXP-W6",
    "Quarter": "2023-Q4",
    "Quota": 50
},
{
    "Airport_Airline": "NAP-FR",
    "Quarter": "2023-Q4",
    "Quota": 50
},
{
    "Airport_Airline": "NAP-W6",
    "Quarter": "2023-Q4",
    "Quota": 50
},
{
    "Airport_Airline": "NCE-W6",
    "Quarter": "2023-Q4",
    "Quota": 50
},
{
    "Airport_Airline": "NCL-LS",
    "Quarter": "2023-Q4",
    "Quota": 50
},
{
    "Airport_Airline": "NGB-FM",
    "Quarter": "2023-Q4",
    "Quota": 50
},
{
    "Airport_Airline": "NUE-FR",
    "Quarter": "2023-Q4",
    "Quota": 50
},
{
    "Airport_Airline": "OPO-FR",
    "Quarter": "2023-Q4",
    "Quota": 50
},
{
    "Airport_Airline": "ORY-W6",
    "Quarter": "2023-Q4",
    "Quota": 50
},
{
    "Airport_Airline": "OSL-DY",
    "Quarter": "2023-Q4",
    "Quota": 100
},
{
    "Airport_Airline": "OTP-RO",
    "Quarter": "2023-Q4",
    "Quota": 50
},
{
    "Airport_Airline": "PEK-CA",
    "Quarter": "2023-Q4",
    "Quota": 100
},
{
    "Airport_Airline": "PFO-FR",
    "Quarter": "2023-Q4",
    "Quota": 34
},
{
    "Airport_Airline": "PMI-FR",
    "Quarter": "2023-Q4",
    "Quota": 10
},
{
    "Airport_Airline": "PMO-FR",
    "Quarter": "2023-Q4",
    "Quota": 50
},
{
    "Airport_Airline": "POZ-FR",
    "Quarter": "2023-Q4",
    "Quota": 50
},
{
    "Airport_Airline": "PRG-FR",
    "Quarter": "2023-Q4",
    "Quota": 50
},
{
    "Airport_Airline": "PSA-FR",
    "Quarter": "2023-Q4",
    "Quota": 50
},
{
    "Airport_Airline": "PVG-FM",
    "Quarter": "2023-Q4",
    "Quota": 150
},
{
    "Airport_Airline": "RIX-BT",
    "Quarter": "2023-Q4",
    "Quota": 100
},
{
    "Airport_Airline": "RUH-W6",
    "Quarter": "2023-Q4",
    "Quota": 50
},
{
    "Airport_Airline": "SAW-PC",
    "Quarter": "2023-Q4",
    "Quota": 100
},
{
    "Airport_Airline": "SAW-TK",
    "Quarter": "2023-Q4",
    "Quota": 50
},
{
    "Airport_Airline": "SKG-FR",
    "Quarter": "2023-Q4",
    "Quota": 50
},
{
    "Airport_Airline": "SKG-W6",
    "Quarter": "2023-Q4",
    "Quota": 50
},
{
    "Airport_Airline": "SKP-W6",
    "Quarter": "2023-Q4",
    "Quota": 50
},
{
    "Airport_Airline": "SNN-FR",
    "Quarter": "2023-Q4",
    "Quota": 50
},
{
    "Airport_Airline": "SOF-FR",
    "Quarter": "2023-Q4",
    "Quota": 50
},
{
    "Airport_Airline": "SSH-W6",
    "Quarter": "2023-Q4",
    "Quota": 50
},
{
    "Airport_Airline": "STN-FR",
    "Quarter": "2023-Q4",
    "Quota": 50
},
{
    "Airport_Airline": "STR-EW",
    "Quarter": "2023-Q4",
    "Quota": 150
},
{
    "Airport_Airline": "SVQ-FR",
    "Quarter": "2023-Q4",
    "Quota": 50
},
{
    "Airport_Airline": "TFS-FR",
    "Quarter": "2023-Q4",
    "Quota": 21
},
{
    "Airport_Airline": "TFS-W6",
    "Quarter": "2023-Q4",
    "Quota": 53
},
{
    "Airport_Airline": "TGD-W6",
    "Quarter": "2023-Q4",
    "Quota": 50
},
{
    "Airport_Airline": "TGM-W6",
    "Quarter": "2023-Q4",
    "Quota": 50
},
{
    "Airport_Airline": "TIA-W6",
    "Quarter": "2023-Q4",
    "Quota": 50
},
{
    "Airport_Airline": "TLV-BZ",
    "Quarter": "2023-Q4",
    "Quota": 50
},
{
    "Airport_Airline": "TLV-FR",
    "Quarter": "2023-Q4",
    "Quota": 50
},
{
    "Airport_Airline": "TLV-LY",
    "Quarter": "2023-Q4",
    "Quota": 100
},
{
    "Airport_Airline": "TLV-W6",
    "Quarter": "2023-Q4",
    "Quota": 50
},
{
    "Airport_Airline": "TSF-FR",
    "Quarter": "2023-Q4",
    "Quota": 50
},
{
    "Airport_Airline": "VIE-OS",
    "Quarter": "2023-Q4",
    "Quota": 150
},
{
    "Airport_Airline": "VLC-FR",
    "Quarter": "2023-Q4",
    "Quota": 50
},
{
    "Airport_Airline": "WAW-LO",
    "Quarter": "2023-Q4",
    "Quota": 150
},
{
    "Airport_Airline": "WAW-W6",
    "Quarter": "2023-Q4",
    "Quota": 50
},
{
    "Airport_Airline": "WMI-FR",
    "Quarter": "2023-Q4",
    "Quota": 50
},
{
    "Airport_Airline": "ZRH-LX",
    "Quarter": "2023-Q4",
    "Quota": 100
},

{
    "Airport_Airline": "AGP-FR",
    "Quarter": "2024-Q1",
    "Quota": 25
},
{
    "Airport_Airline": "ALC-FR",
    "Quarter": "2024-Q1",
    "Quota": 15
},
{
    "Airport_Airline": "AGP-W6",
    "Quarter": "2024-Q1",
    "Quota": 25
},
{
    "Airport_Airline": "ALC-W6",
    "Quarter": "2024-Q1",
    "Quota": 35
},
{
    "Airport_Airline": "MLA-FR",
    "Quarter": "2024-Q1",
    "Quota": 30
},
{
    "Airport_Airline": "PFO-FR",
    "Quarter": "2024-Q1",
    "Quota": 30
},
{
    "Airport_Airline": "FNC-W6",
    "Quarter": "2024-Q1",
    "Quota": 30
},
{
    "Airport_Airline": "LCA-W6",
    "Quarter": "2024-Q1",
    "Quota": 30
},
{
    "Airport_Airline": "MLA-W6",
    "Quarter": "2024-Q1",
    "Quota": 30
},
{
    "Airport_Airline": "ACE-FR",
    "Quarter": "2024-Q1",
    "Quota": 10
},
{
    "Airport_Airline": "LPA-FR",
    "Quarter": "2024-Q1",
    "Quota": 10
},
{
    "Airport_Airline": "TFS-FR",
    "Quarter": "2024-Q1",
    "Quota": 30
},
{
    "Airport_Airline": "TFS-W6",
    "Quarter": "2024-Q1",
    "Quota": 40
},
{
    "Airport_Airline": "TLV-6H",
    "Quarter": "2024-Q1",
    "Quota": 100
},
{
    "Airport_Airline": "ATH-A3",
    "Quarter": "2024-Q1",
    "Quota": 100
},
{
    "Airport_Airline": "CDG-AF",
    "Quarter": "2024-Q1",
    "Quota": 200
},
{
    "Airport_Airline": "HEL-AY",
    "Quarter": "2024-Q1",
    "Quota": 150
},
{
    "Airport_Airline": "LHR-BA",
    "Quarter": "2024-Q1",
    "Quota": 200
},
{
    "Airport_Airline": "RIX-BT",
    "Quarter": "2024-Q1",
    "Quota": 100
},
{
    "Airport_Airline": "TLV-BZ",
    "Quarter": "2024-Q1",
    "Quota": 50
},
{
    "Airport_Airline": "CKG-CA",
    "Quarter": "2024-Q1",
    "Quota": 100
},
{
    "Airport_Airline": "PEK-CA",
    "Quarter": "2024-Q1",
    "Quota": 150
},
{
    "Airport_Airline": "CPH-DY",
    "Quarter": "2024-Q1",
    "Quota": 100
},
{
    "Airport_Airline": "OSL-DY",
    "Quarter": "2024-Q1",
    "Quota": 100
},
{
    "Airport_Airline": "BSL-EC",
    "Quarter": "2024-Q1",
    "Quota": 50
},
{
    "Airport_Airline": "GVA-EC",
    "Quarter": "2024-Q1",
    "Quota": 50
},
{
    "Airport_Airline": "LGW-EC",
    "Quarter": "2024-Q1",
    "Quota": 100
},
{
    "Airport_Airline": "DUB-EI",
    "Quarter": "2024-Q1",
    "Quota": 100
},
{
    "Airport_Airline": "DXB-EK",
    "Quarter": "2024-Q1",
    "Quota": 150
},
{
    "Airport_Airline": "CGN-EW",
    "Quarter": "2024-Q1",
    "Quota": 100
},
{
    "Airport_Airline": "DUS-EW",
    "Quarter": "2024-Q1",
    "Quota": 100
},
{
    "Airport_Airline": "HAM-EW",
    "Quarter": "2024-Q1",
    "Quota": 100
},
{
    "Airport_Airline": "STR-EW",
    "Quarter": "2024-Q1",
    "Quota": 100
},
{
    "Airport_Airline": "NGB-FM",
    "Quarter": "2024-Q1",
    "Quota": 100
},
{
    "Airport_Airline": "PVG-FM",
    "Quarter": "2024-Q1",
    "Quota": 150
},
{
    "Airport_Airline": "AMM-FR",
    "Quarter": "2024-Q1",
    "Quota": 50
},
{
    "Airport_Airline": "ARN-FR",
    "Quarter": "2024-Q1",
    "Quota": 50
},
{
    "Airport_Airline": "ATH-FR",
    "Quarter": "2024-Q1",
    "Quota": 50
},
{
    "Airport_Airline": "BCN-FR",
    "Quarter": "2024-Q1",
    "Quota": 50
},
{
    "Airport_Airline": "BER-FR",
    "Quarter": "2024-Q1",
    "Quota": 50
},
{
    "Airport_Airline": "BFS-FR",
    "Quarter": "2024-Q1",
    "Quota": 50
},
{
    "Airport_Airline": "BGY-FR",
    "Quarter": "2024-Q1",
    "Quota": 50
},
{
    "Airport_Airline": "BHX-FR",
    "Quarter": "2024-Q1",
    "Quota": 50
},
{
    "Airport_Airline": "BLL-FR",
    "Quarter": "2024-Q1",
    "Quota": 50
},
{
    "Airport_Airline": "BLQ-FR",
    "Quarter": "2024-Q1",
    "Quota": 50
},
{
    "Airport_Airline": "BRI-FR",
    "Quarter": "2024-Q1",
    "Quota": 50
},
{
    "Airport_Airline": "BRS-FR",
    "Quarter": "2024-Q1",
    "Quota": 50
},
{
    "Airport_Airline": "BVA-FR",
    "Quarter": "2024-Q1",
    "Quota": 50
},
{
    "Airport_Airline": "CAG-FR",
    "Quarter": "2024-Q1",
    "Quota": 50
},
{
    "Airport_Airline": "CIA-FR",
    "Quarter": "2024-Q1",
    "Quota": 50
},
{
    "Airport_Airline": "CPH-FR",
    "Quarter": "2024-Q1",
    "Quota": 50
},
{
    "Airport_Airline": "CRL-FR",
    "Quarter": "2024-Q1",
    "Quota": 50
},
{
    "Airport_Airline": "CTA-FR",
    "Quarter": "2024-Q1",
    "Quota": 50
},
{
    "Airport_Airline": "DUB-FR",
    "Quarter": "2024-Q1",
    "Quota": 50
},
{
    "Airport_Airline": "EDI-FR",
    "Quarter": "2024-Q1",
    "Quota": 50
},
{
    "Airport_Airline": "LIS-FR",
    "Quarter": "2024-Q1",
    "Quota": 50
},
{
    "Airport_Airline": "MAD-FR",
    "Quarter": "2024-Q1",
    "Quota": 50
},
{
    "Airport_Airline": "MAN-FR",
    "Quarter": "2024-Q1",
    "Quota": 50
},
{
    "Airport_Airline": "MRS-FR",
    "Quarter": "2024-Q1",
    "Quota": 50
},
{
    "Airport_Airline": "NAP-FR",
    "Quarter": "2024-Q1",
    "Quota": 50
},
{
    "Airport_Airline": "NUE-FR",
    "Quarter": "2024-Q1",
    "Quota": 50
},
{
    "Airport_Airline": "OPO-FR",
    "Quarter": "2024-Q1",
    "Quota": 50
},
{
    "Airport_Airline": "PMO-FR",
    "Quarter": "2024-Q1",
    "Quota": 50
},
{
    "Airport_Airline": "PRG-FR",
    "Quarter": "2024-Q1",
    "Quota": 50
},
{
    "Airport_Airline": "PSA-FR",
    "Quarter": "2024-Q1",
    "Quota": 50
},
{
    "Airport_Airline": "SKG-FR",
    "Quarter": "2024-Q1",
    "Quota": 50
},
{
    "Airport_Airline": "SNN-FR",
    "Quarter": "2024-Q1",
    "Quota": 50
},
{
    "Airport_Airline": "SOF-FR",
    "Quarter": "2024-Q1",
    "Quota": 50
},
{
    "Airport_Airline": "STN-FR",
    "Quarter": "2024-Q1",
    "Quota": 50
},
{
    "Airport_Airline": "SVQ-FR",
    "Quarter": "2024-Q1",
    "Quota": 50
},
{
    "Airport_Airline": "TLV-FR",
    "Quarter": "2024-Q1",
    "Quota": 50
},
{
    "Airport_Airline": "TSF-FR",
    "Quarter": "2024-Q1",
    "Quota": 50
},
{
    "Airport_Airline": "VLC-FR",
    "Quarter": "2024-Q1",
    "Quota": 50
},
{
    "Airport_Airline": "WMI-FR",
    "Quarter": "2024-Q1",
    "Quota": 50
},
{
    "Airport_Airline": "DXB-FZ",
    "Quarter": "2024-Q1",
    "Quota": 100
},
{
    "Airport_Airline": "MAD-IB",
    "Quarter": "2024-Q1",
    "Quota": 100
},
{
    "Airport_Airline": "BEG-JU",
    "Quarter": "2024-Q1",
    "Quota": 100
},
{
    "Airport_Airline": "ICN-KE",
    "Quarter": "2024-Q1",
    "Quota": 150
},
{
    "Airport_Airline": "AMS-KL",
    "Quarter": "2024-Q1",
    "Quota": 150
},
{
    "Airport_Airline": "LUX-LG",
    "Quarter": "2024-Q1",
    "Quota": 50
},
{
    "Airport_Airline": "FRA-LH",
    "Quarter": "2024-Q1",
    "Quota": 150
},
{
    "Airport_Airline": "MUC-LH",
    "Quarter": "2024-Q1",
    "Quota": 150
},
{
    "Airport_Airline": "ICN-LO",
    "Quarter": "2024-Q1",
    "Quota": 155
},
{
    "Airport_Airline": "WAW-LO",
    "Quarter": "2024-Q1",
    "Quota": 155
},
{
    "Airport_Airline": "BHX-LS",
    "Quarter": "2024-Q1",
    "Quota": 50
},
{
    "Airport_Airline": "LBA-LS",
    "Quarter": "2024-Q1",
    "Quota": 50
},
{
    "Airport_Airline": "MAN-LS",
    "Quarter": "2024-Q1",
    "Quota": 50
},
{
    "Airport_Airline": "ZRH-LX",
    "Quarter": "2024-Q1",
    "Quota": 100
},
{
    "Airport_Airline": "TLV-LY",
    "Quarter": "2024-Q1",
    "Quota": 100
},
{
    "Airport_Airline": "CAI-MS",
    "Quarter": "2024-Q1",
    "Quota": 100
},
{
    "Airport_Airline": "VIE-OS",
    "Quarter": "2024-Q1",
    "Quota": 150
},
{
    "Airport_Airline": "SAW-PC",
    "Quarter": "2024-Q1",
    "Quota": 100
},
{
    "Airport_Airline": "DOH-QR",
    "Quarter": "2024-Q1",
    "Quota": 150
},
{
    "Airport_Airline": "OTP-RO",
    "Quarter": "2024-Q1",
    "Quota": 50
},
{
    "Airport_Airline": "HRG-SM",
    "Quarter": "2024-Q1",
    "Quota": 50
},
{
    "Airport_Airline": "BRU-SN",
    "Quarter": "2024-Q1",
    "Quota": 50
},
{
    "Airport_Airline": "IST-TK",
    "Quarter": "2024-Q1",
    "Quota": 150
},
{
    "Airport_Airline": "SAW-TK",
    "Quarter": "2024-Q1",
    "Quota": 100
},
{
    "Airport_Airline": "AMM-W6",
    "Quarter": "2024-Q1",
    "Quota": 50
},
{
    "Airport_Airline": "ATH-W6",
    "Quarter": "2024-Q1",
    "Quota": 50
},
{
    "Airport_Airline": "AUH-W6",
    "Quarter": "2024-Q1",
    "Quota": 50
},
{
    "Airport_Airline": "BCN-W6",
    "Quarter": "2024-Q1",
    "Quota": 50
},
{
    "Airport_Airline": "BER-W6",
    "Quarter": "2024-Q1",
    "Quota": 50
},
{
    "Airport_Airline": "BHX-W6",
    "Quarter": "2024-Q1",
    "Quota": 50
},
{
    "Airport_Airline": "BRI-W6",
    "Quarter": "2024-Q1",
    "Quota": 50
},
{
    "Airport_Airline": "BSL-W6",
    "Quarter": "2024-Q1",
    "Quota": 50
},
{
    "Airport_Airline": "CPH-W6",
    "Quarter": "2024-Q1",
    "Quota": 50
},
{
    "Airport_Airline": "CRL-W6",
    "Quarter": "2024-Q1",
    "Quota": 50
},
{
    "Airport_Airline": "CTA-W6",
    "Quarter": "2024-Q1",
    "Quota": 50
},
{
    "Airport_Airline": "DMM-W6",
    "Quarter": "2024-Q1",
    "Quota": 50
},
{
    "Airport_Airline": "DXB-W6",
    "Quarter": "2024-Q1",
    "Quota": 50
},
{
    "Airport_Airline": "EIN-W6",
    "Quarter": "2024-Q1",
    "Quota": 50
},
{
    "Airport_Airline": "FCO-W6",
    "Quarter": "2024-Q1",
    "Quota": 50
},
{
    "Airport_Airline": "GLA-W6",
    "Quarter": "2024-Q1",
    "Quota": 50
},
{
    "Airport_Airline": "GYD-W6",
    "Quarter": "2024-Q1",
    "Quota": 50
},
{
    "Airport_Airline": "HRG-W6",
    "Quarter": "2024-Q1",
    "Quota": 50
},
{
    "Airport_Airline": "IST-W6",
    "Quarter": "2024-Q1",
    "Quota": 50
},
{
    "Airport_Airline": "JED-W6",
    "Quarter": "2024-Q1",
    "Quota": 50
},
{
    "Airport_Airline": "KEF-W6",
    "Quarter": "2024-Q1",
    "Quota": 50
},
{
    "Airport_Airline": "KUT-W6",
    "Quarter": "2024-Q1",
    "Quota": 50
},
{
    "Airport_Airline": "LGW-W6",
    "Quarter": "2024-Q1",
    "Quota": 50
},
{
    "Airport_Airline": "LIS-W6",
    "Quarter": "2024-Q1",
    "Quota": 50
},
{
    "Airport_Airline": "LPL-W6",
    "Quarter": "2024-Q1",
    "Quota": 50
},
{
    "Airport_Airline": "LTN-W6",
    "Quarter": "2024-Q1",
    "Quota": 50
},
{
    "Airport_Airline": "MAD-W6",
    "Quarter": "2024-Q1",
    "Quota": 50
},
{
    "Airport_Airline": "MXP-W6",
    "Quarter": "2024-Q1",
    "Quota": 50
},
{
    "Airport_Airline": "NAP-W6",
    "Quarter": "2024-Q1",
    "Quota": 50
},
{
    "Airport_Airline": "NCE-W6",
    "Quarter": "2024-Q1",
    "Quota": 50
},
{
    "Airport_Airline": "ORY-W6",
    "Quarter": "2024-Q1",
    "Quota": 50
},
{
    "Airport_Airline": "RUH-W6",
    "Quarter": "2024-Q1",
    "Quota": 50
},
{
    "Airport_Airline": "SKG-W6",
    "Quarter": "2024-Q1",
    "Quota": 50
},
{
    "Airport_Airline": "SKP-W6",
    "Quarter": "2024-Q1",
    "Quota": 50
},
{
    "Airport_Airline": "SPX-W6",
    "Quarter": "2024-Q1",
    "Quota": 50
},
{
    "Airport_Airline": "SSH-W6",
    "Quarter": "2024-Q1",
    "Quota": 50
},
{
    "Airport_Airline": "TGD-W6",
    "Quarter": "2024-Q1",
    "Quota": 50
},
{
    "Airport_Airline": "TGM-W6",
    "Quarter": "2024-Q1",
    "Quota": 50
},
{
    "Airport_Airline": "TIA-W6",
    "Quarter": "2024-Q1",
    "Quota": 50
},
{
    "Airport_Airline": "TLV-W6",
    "Quarter": "2024-Q1",
    "Quota": 50
},
{
    "Airport_Airline": "WAW-W6",
    "Quarter": "2024-Q1",
    "Quota": 50
},
{
    "Airport_Airline": "AYT-XQ",
    "Quarter": "2024-Q1",
    "Quota": 100
},


{
    "Airport_Airline": "TLV-6H",
    "Quarter": "2024-Q2",
    "Quota": 100
},
{
    "Airport_Airline": "ATH-A3",
    "Quarter": "2024-Q2",
    "Quota": 100
},
{
    "Airport_Airline": "CDG-AF",
    "Quarter": "2024-Q2",
    "Quota": 150
},
{
    "Airport_Airline": "HEL-AY",
    "Quarter": "2024-Q2",
    "Quota": 150
},
{
    "Airport_Airline": "LHR-BA",
    "Quarter": "2024-Q2",
    "Quota": 150
},
{
    "Airport_Airline": "RIX-BT",
    "Quarter": "2024-Q2",
    "Quota": 100
},
{
    "Airport_Airline": "TLV-BZ",
    "Quarter": "2024-Q2",
    "Quota": 50
},
{
    "Airport_Airline": "CKG-CA",
    "Quarter": "2024-Q2",
    "Quota": 100
},
{
    "Airport_Airline": "PEK-CA",
    "Quarter": "2024-Q2",
    "Quota": 150
},
{
    "Airport_Airline": "ARN-DY",
    "Quarter": "2024-Q2",
    "Quota": 100
},
{
    "Airport_Airline": "CPH-DY",
    "Quarter": "2024-Q2",
    "Quota": 100
},
{
    "Airport_Airline": "OSL-DY",
    "Quarter": "2024-Q2",
    "Quota": 100
},
{
    "Airport_Airline": "BSL-EC",
    "Quarter": "2024-Q2",
    "Quota": 50
},
{
    "Airport_Airline": "GVA-EC",
    "Quarter": "2024-Q2",
    "Quota": 50
},
{
    "Airport_Airline": "LGW-EC",
    "Quarter": "2024-Q2",
    "Quota": 100
},
{
    "Airport_Airline": "DUB-EI",
    "Quarter": "2024-Q2",
    "Quota": 100
},
{
    "Airport_Airline": "DXB-EK",
    "Quarter": "2024-Q2",
    "Quota": 150
},
{
    "Airport_Airline": "CGN-EW",
    "Quarter": "2024-Q2",
    "Quota": 100
},
{
    "Airport_Airline": "DUS-EW",
    "Quarter": "2024-Q2",
    "Quota": 100
},
{
    "Airport_Airline": "HAM-EW",
    "Quarter": "2024-Q2",
    "Quota": 100
},
{
    "Airport_Airline": "STR-EW",
    "Quarter": "2024-Q2",
    "Quota": 100
},
{
    "Airport_Airline": "NGB-FM",
    "Quarter": "2024-Q2",
    "Quota": 100
},
{
    "Airport_Airline": "PVG-FM",
    "Quarter": "2024-Q2",
    "Quota": 200
},
{
    "Airport_Airline": "ACE-FR",
    "Quarter": "2024-Q2",
    "Quota": 50
},
{
    "Airport_Airline": "AGP-FR",
    "Quarter": "2024-Q2",
    "Quota": 18
},
{
    "Airport_Airline": "AHO-FR",
    "Quarter": "2024-Q2",
    "Quota": 50
},
{
    "Airport_Airline": "ALC-FR",
    "Quarter": "2024-Q2",
    "Quota": 18
},
{
    "Airport_Airline": "ARN-FR",
    "Quarter": "2024-Q2",
    "Quota": 50
},
{
    "Airport_Airline": "ATH-FR",
    "Quarter": "2024-Q2",
    "Quota": 50
},
{
    "Airport_Airline": "BCN-FR",
    "Quarter": "2024-Q2",
    "Quota": 50
},
{
    "Airport_Airline": "BER-FR",
    "Quarter": "2024-Q2",
    "Quota": 50
},
{
    "Airport_Airline": "BFS-FR",
    "Quarter": "2024-Q2",
    "Quota": 50
},
{
    "Airport_Airline": "BGY-FR",
    "Quarter": "2024-Q2",
    "Quota": 50
},
{
    "Airport_Airline": "BHX-FR",
    "Quarter": "2024-Q2",
    "Quota": 50
},
{
    "Airport_Airline": "BLL-FR",
    "Quarter": "2024-Q2",
    "Quota": 50
},
{
    "Airport_Airline": "BLQ-FR",
    "Quarter": "2024-Q2",
    "Quota": 50
},
{
    "Airport_Airline": "BOH-FR",
    "Quarter": "2024-Q2",
    "Quota": 50
},
{
    "Airport_Airline": "BOJ-FR",
    "Quarter": "2024-Q2",
    "Quota": 50
},
{
    "Airport_Airline": "BRI-FR",
    "Quarter": "2024-Q2",
    "Quota": 50
},
{
    "Airport_Airline": "BRS-FR",
    "Quarter": "2024-Q2",
    "Quota": 50
},
{
    "Airport_Airline": "BVA-FR",
    "Quarter": "2024-Q2",
    "Quota": 50
},
{
    "Airport_Airline": "CAG-FR",
    "Quarter": "2024-Q2",
    "Quota": 50
},
{
    "Airport_Airline": "CFU-FR",
    "Quarter": "2024-Q2",
    "Quota": 50
},
{
    "Airport_Airline": "CHQ-FR",
    "Quarter": "2024-Q2",
    "Quota": 50
},
{
    "Airport_Airline": "CIA-FR",
    "Quarter": "2024-Q2",
    "Quota": 50
},
{
    "Airport_Airline": "CPH-FR",
    "Quarter": "2024-Q2",
    "Quota": 50
},
{
    "Airport_Airline": "CRL-FR",
    "Quarter": "2024-Q2",
    "Quota": 50
},
{
    "Airport_Airline": "CTA-FR",
    "Quarter": "2024-Q2",
    "Quota": 50
},
{
    "Airport_Airline": "DUB-FR",
    "Quarter": "2024-Q2",
    "Quota": 50
},
{
    "Airport_Airline": "EDI-FR",
    "Quarter": "2024-Q2",
    "Quota": 50
},
{
    "Airport_Airline": "EMA-FR",
    "Quarter": "2024-Q2",
    "Quota": 50
},
{
    "Airport_Airline": "FAO-FR",
    "Quarter": "2024-Q2",
    "Quota": 50
},
{
    "Airport_Airline": "GOT-FR",
    "Quarter": "2024-Q2",
    "Quota": 50
},
{
    "Airport_Airline": "HHN-FR",
    "Quarter": "2024-Q2",
    "Quota": 50
},
{
    "Airport_Airline": "JMK-FR",
    "Quarter": "2024-Q2",
    "Quota": 50
},
{
    "Airport_Airline": "JSI-FR",
    "Quarter": "2024-Q2",
    "Quota": 3
},
{
    "Airport_Airline": "LIS-FR",
    "Quarter": "2024-Q2",
    "Quota": 50
},
{
    "Airport_Airline": "LPA-FR",
    "Quarter": "2024-Q2",
    "Quota": 12
},
{
    "Airport_Airline": "MAD-FR",
    "Quarter": "2024-Q2",
    "Quota": 50
},
{
    "Airport_Airline": "MAN-FR",
    "Quarter": "2024-Q2",
    "Quota": 50
},
{
    "Airport_Airline": "MLA-FR",
    "Quarter": "2024-Q2",
    "Quota": 29
},
{
    "Airport_Airline": "MRS-FR",
    "Quarter": "2024-Q2",
    "Quota": 50
},
{
    "Airport_Airline": "MXP-FR",
    "Quarter": "2024-Q2",
    "Quota": 50
},
{
    "Airport_Airline": "NAP-FR",
    "Quarter": "2024-Q2",
    "Quota": 50
},
{
    "Airport_Airline": "NUE-FR",
    "Quarter": "2024-Q2",
    "Quota": 50
},
{
    "Airport_Airline": "OPO-FR",
    "Quarter": "2024-Q2",
    "Quota": 50
},
{
    "Airport_Airline": "PFO-FR",
    "Quarter": "2024-Q2",
    "Quota": 17
},
{
    "Airport_Airline": "PMI-FR",
    "Quarter": "2024-Q2",
    "Quota": 21
},
{
    "Airport_Airline": "PMO-FR",
    "Quarter": "2024-Q2",
    "Quota": 50
},
{
    "Airport_Airline": "PRG-FR",
    "Quarter": "2024-Q2",
    "Quota": 50
},
{
    "Airport_Airline": "PSA-FR",
    "Quarter": "2024-Q2",
    "Quota": 50
},
{
    "Airport_Airline": "PVK-FR",
    "Quarter": "2024-Q2",
    "Quota": 50
},
{
    "Airport_Airline": "RHO-FR",
    "Quarter": "2024-Q2",
    "Quota": 5
},
{
    "Airport_Airline": "RMI-FR",
    "Quarter": "2024-Q2",
    "Quota": 50
},
{
    "Airport_Airline": "SKG-FR",
    "Quarter": "2024-Q2",
    "Quota": 50
},
{
    "Airport_Airline": "SNN-FR",
    "Quarter": "2024-Q2",
    "Quota": 50
},
{
    "Airport_Airline": "SOF-FR",
    "Quarter": "2024-Q2",
    "Quota": 50
},
{
    "Airport_Airline": "STN-FR",
    "Quarter": "2024-Q2",
    "Quota": 50
},
{
    "Airport_Airline": "SVQ-FR",
    "Quarter": "2024-Q2",
    "Quota": 50
},
{
    "Airport_Airline": "TFS-FR",
    "Quarter": "2024-Q2",
    "Quota": 32
},
{
    "Airport_Airline": "TIA-FR",
    "Quarter": "2024-Q2",
    "Quota": 50
},
{
    "Airport_Airline": "TRS-FR",
    "Quarter": "2024-Q2",
    "Quota": 50
},
{
    "Airport_Airline": "TSF-FR",
    "Quarter": "2024-Q2",
    "Quota": 50
},
{
    "Airport_Airline": "VLC-FR",
    "Quarter": "2024-Q2",
    "Quota": 50
},
{
    "Airport_Airline": "WMI-FR",
    "Quarter": "2024-Q2",
    "Quota": 50
},
{
    "Airport_Airline": "ZAD-FR",
    "Quarter": "2024-Q2",
    "Quota": 50
},
{
    "Airport_Airline": "ZTH-FR",
    "Quarter": "2024-Q2",
    "Quota": 50
},
{
    "Airport_Airline": "DXB-FZ",
    "Quarter": "2024-Q2",
    "Quota": 100
},
{
    "Airport_Airline": "MAD-IB",
    "Quarter": "2024-Q2",
    "Quota": 100
},
{
    "Airport_Airline": "TLV-IZ",
    "Quarter": "2024-Q2",
    "Quota": 50
},
{
    "Airport_Airline": "BEG-JU",
    "Quarter": "2024-Q2",
    "Quota": 100
},
{
    "Airport_Airline": "ICN-KE",
    "Quarter": "2024-Q2",
    "Quota": 150
},
{
    "Airport_Airline": "AMS-KL",
    "Quarter": "2024-Q2",
    "Quota": 150
},
{
    "Airport_Airline": "LUX-LG",
    "Quarter": "2024-Q2",
    "Quota": 50
},
{
    "Airport_Airline": "FRA-LH",
    "Quarter": "2024-Q2",
    "Quota": 150
},
{
    "Airport_Airline": "MUC-LH",
    "Quarter": "2024-Q2",
    "Quota": 150
},
{
    "Airport_Airline": "ICN-LO",
    "Quarter": "2024-Q2",
    "Quota": 150
},
{
    "Airport_Airline": "WAW-LO",
    "Quarter": "2024-Q2",
    "Quota": 150
},
{
    "Airport_Airline": "BHX-LS",
    "Quarter": "2024-Q2",
    "Quota": 50
},
{
    "Airport_Airline": "LBA-LS",
    "Quarter": "2024-Q2",
    "Quota": 50
},
{
    "Airport_Airline": "MAN-LS",
    "Quarter": "2024-Q2",
    "Quota": 50
},
{
    "Airport_Airline": "ZRH-LX",
    "Quarter": "2024-Q2",
    "Quota": 100
},
{
    "Airport_Airline": "TLV-LY",
    "Quarter": "2024-Q2",
    "Quota": 100
},
{
    "Airport_Airline": "CAI-MS",
    "Quarter": "2024-Q2",
    "Quota": 100
},
{
    "Airport_Airline": "VIE-OS",
    "Quarter": "2024-Q2",
    "Quota": 150
},
{
    "Airport_Airline": "SAW-PC",
    "Quarter": "2024-Q2",
    "Quota": 100
},
{
    "Airport_Airline": "DOH-QR",
    "Quarter": "2024-Q2",
    "Quota": 150
},
{
    "Airport_Airline": "OTP-RO",
    "Quarter": "2024-Q2",
    "Quota": 50
},
{
    "Airport_Airline": "HRG-SM",
    "Quarter": "2024-Q2",
    "Quota": 50
},
{
    "Airport_Airline": "BRU-SN",
    "Quarter": "2024-Q2",
    "Quota": 50
},
{
    "Airport_Airline": "IST-TK",
    "Quarter": "2024-Q2",
    "Quota": 150
},
{
    "Airport_Airline": "CLJ-W2",
    "Quarter": "2024-Q2",
    "Quota": 50
},
{
    "Airport_Airline": "AGP-W6",
    "Quarter": "2024-Q2",
    "Quota": 28
},
{
    "Airport_Airline": "AHO-W6",
    "Quarter": "2024-Q2",
    "Quota": 2
},
{
    "Airport_Airline": "ALC-W6",
    "Quarter": "2024-Q2",
    "Quota": 36
},
{
    "Airport_Airline": "AMM-W6",
    "Quarter": "2024-Q2",
    "Quota": 50
},
{
    "Airport_Airline": "ARN-W6",
    "Quarter": "2024-Q2",
    "Quota": 50
},
{
    "Airport_Airline": "ATH-W6",
    "Quarter": "2024-Q2",
    "Quota": 50
},
{
    "Airport_Airline": "AUH-W6",
    "Quarter": "2024-Q2",
    "Quota": 50
},
{
    "Airport_Airline": "AYT-W6",
    "Quarter": "2024-Q2",
    "Quota": 50
},
{
    "Airport_Airline": "BCN-W6",
    "Quarter": "2024-Q2",
    "Quota": 50
},
{
    "Airport_Airline": "BER-W6",
    "Quarter": "2024-Q2",
    "Quota": 50
},
{
    "Airport_Airline": "BHX-W6",
    "Quarter": "2024-Q2",
    "Quota": 50
},
{
    "Airport_Airline": "BOJ-W6",
    "Quarter": "2024-Q2",
    "Quota": 50
},
{
    "Airport_Airline": "BRI-W6",
    "Quarter": "2024-Q2",
    "Quota": 50
},
{
    "Airport_Airline": "BSL-W6",
    "Quarter": "2024-Q2",
    "Quota": 50
},
{
    "Airport_Airline": "CFU-W6",
    "Quarter": "2024-Q2",
    "Quota": 3
},
{
    "Airport_Airline": "CHQ-W6",
    "Quarter": "2024-Q2",
    "Quota": 2
},
{
    "Airport_Airline": "CPH-W6",
    "Quarter": "2024-Q2",
    "Quota": 50
},
{
    "Airport_Airline": "CRL-W6",
    "Quarter": "2024-Q2",
    "Quota": 50
},
{
    "Airport_Airline": "CTA-W6",
    "Quarter": "2024-Q2",
    "Quota": 50
},
{
    "Airport_Airline": "DTM-W6",
    "Quarter": "2024-Q2",
    "Quota": 50
},
{
    "Airport_Airline": "DXB-W6",
    "Quarter": "2024-Q2",
    "Quota": 50
},
{
    "Airport_Airline": "EIN-W6",
    "Quarter": "2024-Q2",
    "Quota": 50
},
{
    "Airport_Airline": "FCO-W6",
    "Quarter": "2024-Q2",
    "Quota": 50
},
{
    "Airport_Airline": "FNC-W6",
    "Quarter": "2024-Q2",
    "Quota": 11
},
{
    "Airport_Airline": "GLA-W6",
    "Quarter": "2024-Q2",
    "Quota": 50
},
{
    "Airport_Airline": "GYD-W6",
    "Quarter": "2024-Q2",
    "Quota": 50
},
{
    "Airport_Airline": "HER-W6",
    "Quarter": "2024-Q2",
    "Quota": 3
},
{
    "Airport_Airline": "HRG-W6",
    "Quarter": "2024-Q2",
    "Quota": 50
},
{
    "Airport_Airline": "IST-W6",
    "Quarter": "2024-Q2",
    "Quota": 50
},
{
    "Airport_Airline": "JED-W6",
    "Quarter": "2024-Q2",
    "Quota": 50
},
{
    "Airport_Airline": "JTR-W6",
    "Quarter": "2024-Q2",
    "Quota": 2
},
{
    "Airport_Airline": "KEF-W6",
    "Quarter": "2024-Q2",
    "Quota": 50
},
{
    "Airport_Airline": "KUT-W6",
    "Quarter": "2024-Q2",
    "Quota": 50
},
{
    "Airport_Airline": "LCA-W6",
    "Quarter": "2024-Q2",
    "Quota": 20
},
{
    "Airport_Airline": "LGW-W6",
    "Quarter": "2024-Q2",
    "Quota": 50
},
{
    "Airport_Airline": "LIS-W6",
    "Quarter": "2024-Q2",
    "Quota": 50
},
{
    "Airport_Airline": "LPL-W6",
    "Quarter": "2024-Q2",
    "Quota": 50
},
{
    "Airport_Airline": "LTN-W6",
    "Quarter": "2024-Q2",
    "Quota": 50
},
{
    "Airport_Airline": "MAD-W6",
    "Quarter": "2024-Q2",
    "Quota": 50
},
{
    "Airport_Airline": "MLA-W6",
    "Quarter": "2024-Q2",
    "Quota": 22
},
{
    "Airport_Airline": "MXP-W6",
    "Quarter": "2024-Q2",
    "Quota": 50
},
{
    "Airport_Airline": "NAP-W6",
    "Quarter": "2024-Q2",
    "Quota": 50
},
{
    "Airport_Airline": "NCE-W6",
    "Quarter": "2024-Q2",
    "Quota": 50
},
{
    "Airport_Airline": "ORY-W6",
    "Quarter": "2024-Q2",
    "Quota": 50
},
{
    "Airport_Airline": "PMI-W6",
    "Quarter": "2024-Q2",
    "Quota": 4
},
{
    "Airport_Airline": "RHO-W6",
    "Quarter": "2024-Q2",
    "Quota": 3
},
{
    "Airport_Airline": "RUH-W6",
    "Quarter": "2024-Q2",
    "Quota": 50
},
{
    "Airport_Airline": "SKG-W6",
    "Quarter": "2024-Q2",
    "Quota": 50
},
{
    "Airport_Airline": "SKP-W6",
    "Quarter": "2024-Q2",
    "Quota": 50
},
{
    "Airport_Airline": "SPX-W6",
    "Quarter": "2024-Q2",
    "Quota": 50
},
{
    "Airport_Airline": "SSH-W6",
    "Quarter": "2024-Q2",
    "Quota": 50
},
{
    "Airport_Airline": "TFS-W6",
    "Quarter": "2024-Q2",
    "Quota": 56
},
{
    "Airport_Airline": "TGD-W6",
    "Quarter": "2024-Q2",
    "Quota": 50
},
{
    "Airport_Airline": "TGM-W6",
    "Quarter": "2024-Q2",
    "Quota": 50
},
{
    "Airport_Airline": "TIA-W6",
    "Quarter": "2024-Q2",
    "Quota": 50
},
{
    "Airport_Airline": "TLV-W6",
    "Quarter": "2024-Q2",
    "Quota": 50
},
{
    "Airport_Airline": "WAW-W6",
    "Quarter": "2024-Q2",
    "Quota": 50
},
{
    "Airport_Airline": "ZTH-W6",
    "Quarter": "2024-Q2",
    "Quota": 3
},
{
    "Airport_Airline": "ADB-XQ",
    "Quarter": "2024-Q2",
    "Quota": 100
},
{
    "Airport_Airline": "AYT-XQ",
    "Quarter": "2024-Q2",
    "Quota": 100
},



       {
        "Airport_Airline": "TLV-6H",
        "Quarter": "2024-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "ATH-A3",
        "Quarter": "2024-Q3",
        "Quota": 100
    },
    {
        "Airport_Airline": "CDG-AF",
        "Quarter": "2024-Q3",
        "Quota": 150
    },
    {
        "Airport_Airline": "HEL-AY",
        "Quarter": "2024-Q3",
        "Quota": 150
    },
    {
        "Airport_Airline": "LHR-BA",
        "Quarter": "2024-Q3",
        "Quota": 150
    },
    {
        "Airport_Airline": "RIX-BT",
        "Quarter": "2024-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "TLV-BZ",
        "Quarter": "2024-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "CKG-CA",
        "Quarter": "2024-Q3",
        "Quota": 100
    },
    {
        "Airport_Airline": "PEK-CA",
        "Quarter": "2024-Q3",
        "Quota": 150
    },
    {
        "Airport_Airline": "CAN-CZ",
        "Quarter": "2024-Q3",
        "Quota": 150
    },
    {
        "Airport_Airline": "ARN-D8",
        "Quarter": "2024-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "CPH-D8",
        "Quarter": "2024-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "OSL-DY",
        "Quarter": "2024-Q3",
        "Quota": 100
    },
    {
        "Airport_Airline": "BSL-EC",
        "Quarter": "2024-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "GVA-EC",
        "Quarter": "2024-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "LGW-EC",
        "Quarter": "2024-Q3",
        "Quota": 100
    },
    {
        "Airport_Airline": "LYS-EC",
        "Quarter": "2024-Q3",
        "Quota": 100
    },
    {
        "Airport_Airline": "DUB-EI",
        "Quarter": "2024-Q3",
        "Quota": 100
    },
    {
        "Airport_Airline": "DXB-EK",
        "Quarter": "2024-Q3",
        "Quota": 150
    },
    {
        "Airport_Airline": "CGN-EW",
        "Quarter": "2024-Q3",
        "Quota": 100
    },
    {
        "Airport_Airline": "DUS-EW",
        "Quarter": "2024-Q3",
        "Quota": 100
    },
    {
        "Airport_Airline": "HAM-EW",
        "Quarter": "2024-Q3",
        "Quota": 100
    },
    {
        "Airport_Airline": "STR-EW",
        "Quarter": "2024-Q3",
        "Quota": 100
    },
    {
        "Airport_Airline": "NGB-FM",
        "Quarter": "2024-Q3",
        "Quota": 100
    },
    {
        "Airport_Airline": "PVG-FM",
        "Quarter": "2024-Q3",
        "Quota": 150
    },
    {
        "Airport_Airline": "XIY-FM",
        "Quarter": "2024-Q3",
        "Quota": 100
    },
    {
        "Airport_Airline": "ACE-FR",
        "Quarter": "2024-Q3",
        "Quota": 10
    },
    {
        "Airport_Airline": "AGP-FR",
        "Quarter": "2024-Q3",
        "Quota": 13
    },
    {
        "Airport_Airline": "AHO-FR",
        "Quarter": "2024-Q3",
        "Quota": 13
    },
    {
        "Airport_Airline": "ALC-FR",
        "Quarter": "2024-Q3",
        "Quota": 17
    },
    {
        "Airport_Airline": "ARN-FR",
        "Quarter": "2024-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "ATH-FR",
        "Quarter": "2024-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "BCN-FR",
        "Quarter": "2024-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "BER-FR",
        "Quarter": "2024-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "BFS-FR",
        "Quarter": "2024-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "BGY-FR",
        "Quarter": "2024-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "BHX-FR",
        "Quarter": "2024-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "BLL-FR",
        "Quarter": "2024-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "BLQ-FR",
        "Quarter": "2024-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "BOH-FR",
        "Quarter": "2024-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "BOJ-FR",
        "Quarter": "2024-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "BRI-FR",
        "Quarter": "2024-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "BRS-FR",
        "Quarter": "2024-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "BVA-FR",
        "Quarter": "2024-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "CAG-FR",
        "Quarter": "2024-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "CFU-FR",
        "Quarter": "2024-Q3",
        "Quota": 15
    },
    {
        "Airport_Airline": "CHQ-FR",
        "Quarter": "2024-Q3",
        "Quota": 11
    },
    {
        "Airport_Airline": "CIA-FR",
        "Quarter": "2024-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "CPH-FR",
        "Quarter": "2024-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "CRL-FR",
        "Quarter": "2024-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "CTA-FR",
        "Quarter": "2024-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "DUB-FR",
        "Quarter": "2024-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "EDI-FR",
        "Quarter": "2024-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "EMA-FR",
        "Quarter": "2024-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "FAO-FR",
        "Quarter": "2024-Q3",
        "Quota": 7
    },
    {
        "Airport_Airline": "GOT-FR",
        "Quarter": "2024-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "HHN-FR",
        "Quarter": "2024-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "JMK-FR",
        "Quarter": "2024-Q3",
        "Quota": 7
    },
    {
        "Airport_Airline": "JSI-FR",
        "Quarter": "2024-Q3",
        "Quota": 7
    },
    {
        "Airport_Airline": "LIS-FR",
        "Quarter": "2024-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "LPA-FR",
        "Quarter": "2024-Q3",
        "Quota": 10
    },
    {
        "Airport_Airline": "MAD-FR",
        "Quarter": "2024-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "MAN-FR",
        "Quarter": "2024-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "MLA-FR",
        "Quarter": "2024-Q3",
        "Quota": 22
    },
    {
        "Airport_Airline": "MRS-FR",
        "Quarter": "2024-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "MXP-FR",
        "Quarter": "2024-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "NAP-FR",
        "Quarter": "2024-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "NUE-FR",
        "Quarter": "2024-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "OPO-FR",
        "Quarter": "2024-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "PFO-FR",
        "Quarter": "2024-Q3",
        "Quota": 19
    },
    {
        "Airport_Airline": "PMI-FR",
        "Quarter": "2024-Q3",
        "Quota": 18
    },
    {
        "Airport_Airline": "PMO-FR",
        "Quarter": "2024-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "PRG-FR",
        "Quarter": "2024-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "PSA-FR",
        "Quarter": "2024-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "PVK-FR",
        "Quarter": "2024-Q3",
        "Quota": 7
    },
    {
        "Airport_Airline": "RHO-FR",
        "Quarter": "2024-Q3",
        "Quota": 15
    },
    {
        "Airport_Airline": "RMI-FR",
        "Quarter": "2024-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "SKG-FR",
        "Quarter": "2024-Q3",
        "Quota": 12
    },
    {
        "Airport_Airline": "SNN-FR",
        "Quarter": "2024-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "SOF-FR",
        "Quarter": "2024-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "STN-FR",
        "Quarter": "2024-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "SVQ-FR",
        "Quarter": "2024-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "TFS-FR",
        "Quarter": "2024-Q3",
        "Quota": 30
    },
    {
        "Airport_Airline": "TIA-FR",
        "Quarter": "2024-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "TLV-FR",
        "Quarter": "2024-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "TRS-FR",
        "Quarter": "2024-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "TSF-FR",
        "Quarter": "2024-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "VLC-FR",
        "Quarter": "2024-Q3",
        "Quota": 22
    },
    {
        "Airport_Airline": "WMI-FR",
        "Quarter": "2024-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "ZAD-FR",
        "Quarter": "2024-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "ZTH-FR",
        "Quarter": "2024-Q3",
        "Quota": 11
    },
    {
        "Airport_Airline": "DXB-FZ",
        "Quarter": "2024-Q3",
        "Quota": 100
    },
    {
        "Airport_Airline": "MAD-IB",
        "Quarter": "2024-Q3",
        "Quota": 150
    },
    {
        "Airport_Airline": "BEG-JU",
        "Quarter": "2024-Q3",
        "Quota": 100
    },
    {
        "Airport_Airline": "ICN-KE",
        "Quarter": "2024-Q3",
        "Quota": 150
    },
    {
        "Airport_Airline": "AMS-KL",
        "Quarter": "2024-Q3",
        "Quota": 150
    },
    {
        "Airport_Airline": "LUX-LG",
        "Quarter": "2024-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "FRA-LH",
        "Quarter": "2024-Q3",
        "Quota": 150
    },
    {
        "Airport_Airline": "MUC-LH",
        "Quarter": "2024-Q3",
        "Quota": 150
    },
    {
        "Airport_Airline": "ICN-LO",
        "Quarter": "2024-Q3",
        "Quota": 100
    },
    {
        "Airport_Airline": "WAW-LO",
        "Quarter": "2024-Q3",
        "Quota": 150
    },
    {
        "Airport_Airline": "BHX-LS",
        "Quarter": "2024-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "LBA-LS",
        "Quarter": "2024-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "MAN-LS",
        "Quarter": "2024-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "ZRH-LX",
        "Quarter": "2024-Q3",
        "Quota": 100
    },
    {
        "Airport_Airline": "TLV-LY",
        "Quarter": "2024-Q3",
        "Quota": 100
    },
    {
        "Airport_Airline": "CAI-MS",
        "Quarter": "2024-Q3",
        "Quota": 100
    },
    {
        "Airport_Airline": "HRG-NP",
        "Quarter": "2024-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "VIE-OS",
        "Quarter": "2024-Q3",
        "Quota": 150
    },
    {
        "Airport_Airline": "SAW-PC",
        "Quarter": "2024-Q3",
        "Quota": 100
    },
    {
        "Airport_Airline": "DOH-QR",
        "Quarter": "2024-Q3",
        "Quota": 150
    },
    {
        "Airport_Airline": "EDI-RK",
        "Quarter": "2024-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "MAN-RK",
        "Quarter": "2024-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "OTP-RO",
        "Quarter": "2024-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "HRG-SM",
        "Quarter": "2024-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "BRU-SN",
        "Quarter": "2024-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "IST-TK",
        "Quarter": "2024-Q3",
        "Quota": 150
    },
    {
        "Airport_Airline": "AGP-W6",
        "Quarter": "2024-Q3",
        "Quota": 22
    },
    {
        "Airport_Airline": "AHO-W6",
        "Quarter": "2024-Q3",
        "Quota": 16
    },
    {
        "Airport_Airline": "ALC-W6",
        "Quarter": "2024-Q3",
        "Quota": 26
    },
    {
        "Airport_Airline": "AMM-W6",
        "Quarter": "2024-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "ARN-W6",
        "Quarter": "2024-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "ATH-W6",
        "Quarter": "2024-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "AUH-W6",
        "Quarter": "2024-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "AYT-W6",
        "Quarter": "2024-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "BCN-W6",
        "Quarter": "2024-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "BER-W6",
        "Quarter": "2024-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "BHX-W6",
        "Quarter": "2024-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "BOJ-W6",
        "Quarter": "2024-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "BRI-W6",
        "Quarter": "2024-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "BRU-W6",
        "Quarter": "2024-Q3",
        "Quota": 100
    },
    {
        "Airport_Airline": "BSL-W6",
        "Quarter": "2024-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "CFU-W6",
        "Quarter": "2024-Q3",
        "Quota": 18
    },
    {
        "Airport_Airline": "CHQ-W6",
        "Quarter": "2024-Q3",
        "Quota": 13
    },
    {
        "Airport_Airline": "CPH-W6",
        "Quarter": "2024-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "CRL-W6",
        "Quarter": "2024-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "CTA-W6",
        "Quarter": "2024-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "DTM-W6",
        "Quarter": "2024-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "DXB-W6",
        "Quarter": "2024-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "EIN-W6",
        "Quarter": "2024-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "EVN-W6",
        "Quarter": "2024-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "FCO-W6",
        "Quarter": "2024-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "FNC-W6",
        "Quarter": "2024-Q3",
        "Quota": 9
    },
    {
        "Airport_Airline": "GHV-W6",
        "Quarter": "2024-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "GLA-W6",
        "Quarter": "2024-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "GYD-W6",
        "Quarter": "2024-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "HER-W6",
        "Quarter": "2024-Q3",
        "Quota": 13
    },
    {
        "Airport_Airline": "HRG-W6",
        "Quarter": "2024-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "IST-W6",
        "Quarter": "2024-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "JED-W6",
        "Quarter": "2024-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "JTR-W6",
        "Quarter": "2024-Q3",
        "Quota": 9
    },
    {
        "Airport_Airline": "KEF-W6",
        "Quarter": "2024-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "KUT-W6",
        "Quarter": "2024-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "LCA-W6",
        "Quarter": "2024-Q3",
        "Quota": 41
    },
    {
        "Airport_Airline": "LGW-W6",
        "Quarter": "2024-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "LIS-W6",
        "Quarter": "2024-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "LPL-W6",
        "Quarter": "2024-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "LTN-W6",
        "Quarter": "2024-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "MAD-W6",
        "Quarter": "2024-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "MLA-W6",
        "Quarter": "2024-Q3",
        "Quota": 23
    },
    {
        "Airport_Airline": "MXP-W6",
        "Quarter": "2024-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "NAP-W6",
        "Quarter": "2024-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "NCE-W6",
        "Quarter": "2024-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "ORY-W6",
        "Quarter": "2024-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "OTP-W6",
        "Quarter": "2024-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "PMI-W6",
        "Quarter": "2024-Q3",
        "Quota": 18
    },
    {
        "Airport_Airline": "RHO-W6",
        "Quarter": "2024-Q3",
        "Quota": 18
    },
    {
        "Airport_Airline": "RMO-W6",
        "Quarter": "2024-Q3",
        "Quota": 9
    },
    {
        "Airport_Airline": "SKG-W6",
        "Quarter": "2024-Q3",
        "Quota": 14
    },
    {
        "Airport_Airline": "SKP-W6",
        "Quarter": "2024-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "SPX-W6",
        "Quarter": "2024-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "STR-W6",
        "Quarter": "2024-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "TFS-W6",
        "Quarter": "2024-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "TGD-W6",
        "Quarter": "2024-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "TGM-W6",
        "Quarter": "2024-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "TIA-W6",
        "Quarter": "2024-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "TLV-W6",
        "Quarter": "2024-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "VLC-W6",
        "Quarter": "2024-Q3",
        "Quota": 14
    },
    {
        "Airport_Airline": "WAW-W6",
        "Quarter": "2024-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "ZTH-W6",
        "Quarter": "2024-Q3",
        "Quota": 21
    },
    {
        "Airport_Airline": "AYT-XC",
        "Quarter": "2024-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "AYT-XQ",
        "Quarter": "2024-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "SZX-HU",
        "Quarter": "2024-Q3",
        "Quota": 150
    },


    {
        "Airport_Airline": "TLV-6H",
        "Quarter": "2024-Q4",
        "Quota": 50
    },
    {
        "Airport_Airline": "ATH-A3",
        "Quarter": "2024-Q4",
        "Quota": 100
    },
    {
        "Airport_Airline": "CDG-AF",
        "Quarter": "2024-Q4",
        "Quota": 150
    },
    {
        "Airport_Airline": "HEL-AY",
        "Quarter": "2024-Q4",
        "Quota": 150
    },
    {
        "Airport_Airline": "LHR-BA",
        "Quarter": "2024-Q4",
        "Quota": 150
    },
    {
        "Airport_Airline": "RIX-BT",
        "Quarter": "2024-Q4",
        "Quota": 50
    },
    {
        "Airport_Airline": "TLV-BZ",
        "Quarter": "2024-Q4",
        "Quota": 50
    },
    {
        "Airport_Airline": "CKG-CA",
        "Quarter": "2024-Q4",
        "Quota": 100
    },
    {
        "Airport_Airline": "PEK-CA",
        "Quarter": "2024-Q4",
        "Quota": 150
    },
    {
        "Airport_Airline": "CAN-CZ",
        "Quarter": "2024-Q4",
        "Quota": 150
    },
    {
        "Airport_Airline": "ARN-D8",
        "Quarter": "2024-Q4",
        "Quota": 50
    },
    {
        "Airport_Airline": "CPH-D8",
        "Quarter": "2024-Q4",
        "Quota": 50
    },
    {
        "Airport_Airline": "OSL-DY",
        "Quarter": "2024-Q4",
        "Quota": 100
    },
    {
        "Airport_Airline": "DUB-EI",
        "Quarter": "2024-Q4",
        "Quota": 100
    },
    {
        "Airport_Airline": "DXB-EK",
        "Quarter": "2024-Q4",
        "Quota": 150
    },
    {
        "Airport_Airline": "CGN-EW",
        "Quarter": "2024-Q4",
        "Quota": 100
    },
    {
        "Airport_Airline": "DUS-EW",
        "Quarter": "2024-Q4",
        "Quota": 100
    },
    {
        "Airport_Airline": "HAM-EW",
        "Quarter": "2024-Q4",
        "Quota": 100
    },
    {
        "Airport_Airline": "STR-EW",
        "Quarter": "2024-Q4",
        "Quota": 100
    },
    {
        "Airport_Airline": "NGB-FM",
        "Quarter": "2024-Q4",
        "Quota": 100
    },
    {
        "Airport_Airline": "PVG-FM",
        "Quarter": "2024-Q4",
        "Quota": 150
    },
    {
        "Airport_Airline": "XIY-FM",
        "Quarter": "2024-Q4",
        "Quota": 100
    },
    {
        "Airport_Airline": "ACE-FR",
        "Quarter": "2024-Q4",
        "Quota": 4
    },
    {
        "Airport_Airline": "AGP-FR",
        "Quarter": "2024-Q4",
        "Quota": 24
    },
    {
        "Airport_Airline": "AHO-FR",
        "Quarter": "2024-Q4",
        "Quota": 4
    },
    {
        "Airport_Airline": "ALC-FR",
        "Quarter": "2024-Q4",
        "Quota": 19
    },
    {
        "Airport_Airline": "ARN-FR",
        "Quarter": "2024-Q4",
        "Quota": 50
    },
    {
        "Airport_Airline": "ATH-FR",
        "Quarter": "2024-Q4",
        "Quota": 50
    },
    {
        "Airport_Airline": "BCN-FR",
        "Quarter": "2024-Q4",
        "Quota": 50
    },
    {
        "Airport_Airline": "BER-FR",
        "Quarter": "2024-Q4",
        "Quota": 50
    },
    {
        "Airport_Airline": "BFS-FR",
        "Quarter": "2024-Q4",
        "Quota": 50
    },
    {
        "Airport_Airline": "BGY-FR",
        "Quarter": "2024-Q4",
        "Quota": 50
    },
    {
        "Airport_Airline": "BHX-FR",
        "Quarter": "2024-Q4",
        "Quota": 50
    },
    {
        "Airport_Airline": "BLL-FR",
        "Quarter": "2024-Q4",
        "Quota": 50
    },
    {
        "Airport_Airline": "BLQ-FR",
        "Quarter": "2024-Q4",
        "Quota": 50
    },
    {
        "Airport_Airline": "BOH-FR",
        "Quarter": "2024-Q4",
        "Quota": 50
    },
    {
        "Airport_Airline": "BRI-FR",
        "Quarter": "2024-Q4",
        "Quota": 50
    },
    {
        "Airport_Airline": "BRS-FR",
        "Quarter": "2024-Q4",
        "Quota": 50
    },
    {
        "Airport_Airline": "BVA-FR",
        "Quarter": "2024-Q4",
        "Quota": 50
    },
    {
        "Airport_Airline": "CAG-FR",
        "Quarter": "2024-Q4",
        "Quota": 50
    },
    {
        "Airport_Airline": "CFU-FR",
        "Quarter": "2024-Q4",
        "Quota": 18
    },
    {
        "Airport_Airline": "CHQ-FR",
        "Quarter": "2024-Q4",
        "Quota": 12
    },
    {
        "Airport_Airline": "CIA-FR",
        "Quarter": "2024-Q4",
        "Quota": 50
    },
    {
        "Airport_Airline": "CPH-FR",
        "Quarter": "2024-Q4",
        "Quota": 50
    },
    {
        "Airport_Airline": "CRL-FR",
        "Quarter": "2024-Q4",
        "Quota": 50
    },
    {
        "Airport_Airline": "CTA-FR",
        "Quarter": "2024-Q4",
        "Quota": 50
    },
    {
        "Airport_Airline": "DUB-FR",
        "Quarter": "2024-Q4",
        "Quota": 50
    },
    {
        "Airport_Airline": "EDI-FR",
        "Quarter": "2024-Q4",
        "Quota": 50
    },
    {
        "Airport_Airline": "EMA-FR",
        "Quarter": "2024-Q4",
        "Quota": 50
    },
    {
        "Airport_Airline": "FAO-FR",
        "Quarter": "2024-Q4",
        "Quota": 10
    },
    {
        "Airport_Airline": "GOT-FR",
        "Quarter": "2024-Q4",
        "Quota": 50
    },
    {
        "Airport_Airline": "HHN-FR",
        "Quarter": "2024-Q4",
        "Quota": 50
    },
    {
        "Airport_Airline": "LIS-FR",
        "Quarter": "2024-Q4",
        "Quota": 50
    },
    {
        "Airport_Airline": "LPA-FR",
        "Quarter": "2024-Q4",
        "Quota": 18
    },
    {
        "Airport_Airline": "LPL-FR",
        "Quarter": "2024-Q4",
        "Quota": 50
    },
    {
        "Airport_Airline": "MAD-FR",
        "Quarter": "2024-Q4",
        "Quota": 50
    },
    {
        "Airport_Airline": "MAN-FR",
        "Quarter": "2024-Q4",
        "Quota": 50
    },
    {
        "Airport_Airline": "MLA-FR",
        "Quarter": "2024-Q4",
        "Quota": 28
    },
    {
        "Airport_Airline": "MRS-FR",
        "Quarter": "2024-Q4",
        "Quota": 50
    },
    {
        "Airport_Airline": "MXP-FR",
        "Quarter": "2024-Q4",
        "Quota": 50
    },
    {
        "Airport_Airline": "NAP-FR",
        "Quarter": "2024-Q4",
        "Quota": 50
    },
    {
        "Airport_Airline": "NUE-FR",
        "Quarter": "2024-Q4",
        "Quota": 50
    },
    {
        "Airport_Airline": "OPO-FR",
        "Quarter": "2024-Q4",
        "Quota": 50
    },
    {
        "Airport_Airline": "PFO-FR",
        "Quarter": "2024-Q4",
        "Quota": 30
    },
    {
        "Airport_Airline": "PMI-FR",
        "Quarter": "2024-Q4",
        "Quota": 8
    },
    {
        "Airport_Airline": "PMO-FR",
        "Quarter": "2024-Q4",
        "Quota": 50
    },
    {
        "Airport_Airline": "PRG-FR",
        "Quarter": "2024-Q4",
        "Quota": 50
    },
    {
        "Airport_Airline": "PSA-FR",
        "Quarter": "2024-Q4",
        "Quota": 50
    },
    {
        "Airport_Airline": "RHO-FR",
        "Quarter": "2024-Q4",
        "Quota": 18
    },
    {
        "Airport_Airline": "RMI-FR",
        "Quarter": "2024-Q4",
        "Quota": 50
    },
    {
        "Airport_Airline": "SKG-FR",
        "Quarter": "2024-Q4",
        "Quota": 56
    },
    {
        "Airport_Airline": "SNN-FR",
        "Quarter": "2024-Q4",
        "Quota": 50
    },
    {
        "Airport_Airline": "SOF-FR",
        "Quarter": "2024-Q4",
        "Quota": 50
    },
    {
        "Airport_Airline": "STN-FR",
        "Quarter": "2024-Q4",
        "Quota": 50
    },
    {
        "Airport_Airline": "SVQ-FR",
        "Quarter": "2024-Q4",
        "Quota": 50
    },
    {
        "Airport_Airline": "TFS-FR",
        "Quarter": "2024-Q4",
        "Quota": 22
    },
    {
        "Airport_Airline": "TIA-FR",
        "Quarter": "2024-Q4",
        "Quota": 50
    },
    {
        "Airport_Airline": "TLS-FR",
        "Quarter": "2024-Q4",
        "Quota": 50
    },
    {
        "Airport_Airline": "TLV-FR",
        "Quarter": "2024-Q4",
        "Quota": 50
    },
    {
        "Airport_Airline": "TRS-FR",
        "Quarter": "2024-Q4",
        "Quota": 50
    },
    {
        "Airport_Airline": "TSF-FR",
        "Quarter": "2024-Q4",
        "Quota": 50
    },
    {
        "Airport_Airline": "VLC-FR",
        "Quarter": "2024-Q4",
        "Quota": 15
    },
    {
        "Airport_Airline": "WMI-FR",
        "Quarter": "2024-Q4",
        "Quota": 50
    },
    {
        "Airport_Airline": "ZTH-FR",
        "Quarter": "2024-Q4",
        "Quota": 8
    },
    {
        "Airport_Airline": "SSH-FT",
        "Quarter": "2024-Q4",
        "Quota": 50
    },
    {
        "Airport_Airline": "DXB-FZ",
        "Quarter": "2024-Q4",
        "Quota": 100
    },
    {
        "Airport_Airline": "TAS-HH",
        "Quarter": "2024-Q4",
        "Quota": 50
    },
    {
        "Airport_Airline": "SZX-HU",
        "Quarter": "2024-Q4",
        "Quota": 150
    },
    {
        "Airport_Airline": "MAD-IB",
        "Quarter": "2024-Q4",
        "Quota": 150
    },
    {
        "Airport_Airline": "BEG-JU",
        "Quarter": "2024-Q4",
        "Quota": 100
    },
    {
        "Airport_Airline": "ICN-KE",
        "Quarter": "2024-Q4",
        "Quota": 150
    },
    {
        "Airport_Airline": "AMS-KL",
        "Quarter": "2024-Q4",
        "Quota": 150
    },
    {
        "Airport_Airline": "LUX-LG",
        "Quarter": "2024-Q4",
        "Quota": 50
    },
    {
        "Airport_Airline": "FRA-LH",
        "Quarter": "2024-Q4",
        "Quota": 150
    },
    {
        "Airport_Airline": "MUC-LH",
        "Quarter": "2024-Q4",
        "Quota": 150
    },
    {
        "Airport_Airline": "ICN-LO",
        "Quarter": "2024-Q4",
        "Quota": 100
    },
    {
        "Airport_Airline": "WAW-LO",
        "Quarter": "2024-Q4",
        "Quota": 150
    },
    {
        "Airport_Airline": "BHX-LS",
        "Quarter": "2024-Q4",
        "Quota": 50
    },
    {
        "Airport_Airline": "LBA-LS",
        "Quarter": "2024-Q4",
        "Quota": 50
    },
    {
        "Airport_Airline": "MAN-LS",
        "Quarter": "2024-Q4",
        "Quota": 50
    },
    {
        "Airport_Airline": "NCL-LS",
        "Quarter": "2024-Q4",
        "Quota": 50
    },
    {
        "Airport_Airline": "ZRH-LX",
        "Quarter": "2024-Q4",
        "Quota": 100
    },
    {
        "Airport_Airline": "TLV-LY",
        "Quarter": "2024-Q4",
        "Quota": 100
    },
    {
        "Airport_Airline": "CAI-MS",
        "Quarter": "2024-Q4",
        "Quota": 100
    },
    {
        "Airport_Airline": "HRG-NP",
        "Quarter": "2024-Q4",
        "Quota": 50
    },
    {
        "Airport_Airline": "VIE-OS",
        "Quarter": "2024-Q4",
        "Quota": 150
    },
    {
        "Airport_Airline": "SAW-PC",
        "Quarter": "2024-Q4",
        "Quota": 100
    },
    {
        "Airport_Airline": "DOH-QR",
        "Quarter": "2024-Q4",
        "Quota": 150
    },
    {
        "Airport_Airline": "BFS-RK",
        "Quarter": "2024-Q4",
        "Quota": 50
    },
    {
        "Airport_Airline": "EDI-RK",
        "Quarter": "2024-Q4",
        "Quota": 50
    },
    {
        "Airport_Airline": "MAN-RK",
        "Quarter": "2024-Q4",
        "Quota": 50
    },
    {
        "Airport_Airline": "OTP-RO",
        "Quarter": "2024-Q4",
        "Quota": 50
    },
    {
        "Airport_Airline": "HRG-SM",
        "Quarter": "2024-Q4",
        "Quota": 50
    },
    {
        "Airport_Airline": "BRU-SN",
        "Quarter": "2024-Q4",
        "Quota": 50
    },
    {
        "Airport_Airline": "IST-TK",
        "Quarter": "2024-Q4",
        "Quota": 150
    },
    {
        "Airport_Airline": "LGW-TOM",
        "Quarter": "2024-Q4",
        "Quota": 50
    },
    {
        "Airport_Airline": "MAN-TOM",
        "Quarter": "2024-Q4",
        "Quota": 50
    },
    {
        "Airport_Airline": "BSL-U2",
        "Quarter": "2024-Q4",
        "Quota": 50
    },
    {
        "Airport_Airline": "CDG-U2",
        "Quarter": "2024-Q4",
        "Quota": 100
    },
    {
        "Airport_Airline": "GVA-U2",
        "Quarter": "2024-Q4",
        "Quota": 50
    },
    {
        "Airport_Airline": "LGW-U2",
        "Quarter": "2024-Q4",
        "Quota": 50
    },
    {
        "Airport_Airline": "LYS-U2",
        "Quarter": "2024-Q4",
        "Quota": 100
    },
    {
        "Airport_Airline": "SAW-VF",
        "Quarter": "2024-Q4",
        "Quota": 50
    },
    {
        "Airport_Airline": "BIO-VY",
        "Quarter": "2024-Q4",
        "Quota": 100
    },
    {
        "Airport_Airline": "NAP-W4",
        "Quarter": "2024-Q4",
        "Quota": 50
    },
    {
        "Airport_Airline": "AGP-W6",
        "Quarter": "2024-Q4",
        "Quota": 26
    },
    {
        "Airport_Airline": "ALC-W6",
        "Quarter": "2024-Q4",
        "Quota": 27
    },
    {
        "Airport_Airline": "AMM-W6",
        "Quarter": "2024-Q4",
        "Quota": 50
    },
    {
        "Airport_Airline": "ARN-W6",
        "Quarter": "2024-Q4",
        "Quota": 50
    },
    {
        "Airport_Airline": "ATH-W6",
        "Quarter": "2024-Q4",
        "Quota": 50
    },
    {
        "Airport_Airline": "AUH-W6",
        "Quarter": "2024-Q4",
        "Quota": 50
    },
    {
        "Airport_Airline": "BCN-W6",
        "Quarter": "2024-Q4",
        "Quota": 50
    },
    {
        "Airport_Airline": "BER-W6",
        "Quarter": "2024-Q4",
        "Quota": 50
    },
    {
        "Airport_Airline": "BHX-W6",
        "Quarter": "2024-Q4",
        "Quota": 50
    },
    {
        "Airport_Airline": "BRI-W6",
        "Quarter": "2024-Q4",
        "Quota": 50
    },
    {
        "Airport_Airline": "BRU-W6",
        "Quarter": "2024-Q4",
        "Quota": 100
    },
    {
        "Airport_Airline": "BSL-W6",
        "Quarter": "2024-Q4",
        "Quota": 50
    },
    {
        "Airport_Airline": "CPH-W6",
        "Quarter": "2024-Q4",
        "Quota": 50
    },
    {
        "Airport_Airline": "CRL-W6",
        "Quarter": "2024-Q4",
        "Quota": 50
    },
    {
        "Airport_Airline": "CTA-W6",
        "Quarter": "2024-Q4",
        "Quota": 50
    },
    {
        "Airport_Airline": "DTM-W6",
        "Quarter": "2024-Q4",
        "Quota": 50
    },
    {
        "Airport_Airline": "DXB-W6",
        "Quarter": "2024-Q4",
        "Quota": 50
    },
    {
        "Airport_Airline": "EIN-W6",
        "Quarter": "2024-Q4",
        "Quota": 50
    },
    {
        "Airport_Airline": "EVN-W6",
        "Quarter": "2024-Q4",
        "Quota": 50
    },
    {
        "Airport_Airline": "FCO-W6",
        "Quarter": "2024-Q4",
        "Quota": 50
    },
    {
        "Airport_Airline": "FMM-W6",
        "Quarter": "2024-Q4",
        "Quota": 50
    },
    {
        "Airport_Airline": "FNC-W6",
        "Quarter": "2024-Q4",
        "Quota": 17
    },
    {
        "Airport_Airline": "GHV-W6",
        "Quarter": "2024-Q4",
        "Quota": 50
    },
    {
        "Airport_Airline": "GLA-W6",
        "Quarter": "2024-Q4",
        "Quota": 50
    },
    {
        "Airport_Airline": "GOA-W6",
        "Quarter": "2024-Q4",
        "Quota": 100
    },
    {
        "Airport_Airline": "GRO-W6",
        "Quarter": "2024-Q4",
        "Quota": 50
    },
    {
        "Airport_Airline": "GYD-W6",
        "Quarter": "2024-Q4",
        "Quota": 50
    },
    {
        "Airport_Airline": "HRG-W6",
        "Quarter": "2024-Q4",
        "Quota": 50
    },
    {
        "Airport_Airline": "IST-W6",
        "Quarter": "2024-Q4",
        "Quota": 50
    },
    {
        "Airport_Airline": "JED-W6",
        "Quarter": "2024-Q4",
        "Quota": 50
    },
    {
        "Airport_Airline": "KEF-W6",
        "Quarter": "2024-Q4",
        "Quota": 50
    },
    {
        "Airport_Airline": "KUT-W6",
        "Quarter": "2024-Q4",
        "Quota": 50
    },
    {
        "Airport_Airline": "LCA-W6",
        "Quarter": "2024-Q4",
        "Quota": 34
    },
    {
        "Airport_Airline": "LGW-W6",
        "Quarter": "2024-Q4",
        "Quota": 50
    },
    {
        "Airport_Airline": "LIS-W6",
        "Quarter": "2024-Q4",
        "Quota": 50
    },
    {
        "Airport_Airline": "LPA-W6",
        "Quarter": "2024-Q4",
        "Quota": 14
    },
    {
        "Airport_Airline": "LPL-W6",
        "Quarter": "2024-Q4",
        "Quota": 50
    },
    {
        "Airport_Airline": "LTN-W6",
        "Quarter": "2024-Q4",
        "Quota": 50
    },
    {
        "Airport_Airline": "MAD-W6",
        "Quarter": "2024-Q4",
        "Quota": 50
    },
    {
        "Airport_Airline": "MLA-W6",
        "Quarter": "2024-Q4",
        "Quota": 27
    },
    {
        "Airport_Airline": "MXP-W6",
        "Quarter": "2024-Q4",
        "Quota": 50
    },
    {
        "Airport_Airline": "NAP-W6",
        "Quarter": "2024-Q4",
        "Quota": 50
    },
    {
        "Airport_Airline": "NCE-W6",
        "Quarter": "2024-Q4",
        "Quota": 50
    },
    {
        "Airport_Airline": "ORY-W6",
        "Quarter": "2024-Q4",
        "Quota": 50
    },
    {
        "Airport_Airline": "OTP-W6",
        "Quarter": "2024-Q4",
        "Quota": 50
    },
    {
        "Airport_Airline": "PMI-W6",
        "Quarter": "2024-Q4",
        "Quota": 6
    },
    {
        "Airport_Airline": "QSR-W6",
        "Quarter": "2024-Q4",
        "Quota": 50
    },
    {
        "Airport_Airline": "RAK-W6",
        "Quarter": "2024-Q4",
        "Quota": 100
    },
    {
        "Airport_Airline": "RHO-W6",
        "Quarter": "2024-Q4",
        "Quota": 12
    },
    {
        "Airport_Airline": "RMO-W6",
        "Quarter": "2024-Q4",
        "Quota": 40
    },
    {
        "Airport_Airline": "RUH-W6",
        "Quarter": "2024-Q4",
        "Quota": 50
    },
    {
        "Airport_Airline": "SKG-W6",
        "Quarter": "2024-Q4",
        "Quota": 36
    },
    {
        "Airport_Airline": "SKP-W6",
        "Quarter": "2024-Q4",
        "Quota": 50
    },
    {
        "Airport_Airline": "SPX-W6",
        "Quarter": "2024-Q4",
        "Quota": 50
    },
    {
        "Airport_Airline": "SSH-W6",
        "Quarter": "2024-Q4",
        "Quota": 50
    },
    {
        "Airport_Airline": "STR-W6",
        "Quarter": "2024-Q4",
        "Quota": 50
    },
    {
        "Airport_Airline": "TFS-W6",
        "Quarter": "2024-Q4",
        "Quota": 42
    },
    {
        "Airport_Airline": "TGD-W6",
        "Quarter": "2024-Q4",
        "Quota": 50
    },
    {
        "Airport_Airline": "TGM-W6",
        "Quarter": "2024-Q4",
        "Quota": 50
    },
    {
        "Airport_Airline": "TIA-W6",
        "Quarter": "2024-Q4",
        "Quota": 50
    },
    {
        "Airport_Airline": "TLV-W6",
        "Quarter": "2024-Q4",
        "Quota": 50
    },
    {
        "Airport_Airline": "VLC-W6",
        "Quarter": "2024-Q4",
        "Quota": 25
    },
    {
        "Airport_Airline": "WAW-W6",
        "Quarter": "2024-Q4",
        "Quota": 50
    },
    {
        "Airport_Airline": "ADB-XQ",
        "Quarter": "2024-Q4",
        "Quota": 50
    },
    {
        "Airport_Airline": "AYT-XQ",
        "Quarter": "2024-Q4",
        "Quota": 50
    },





 {
        "Airport_Airline": "TLV-6H",
        "Quarter": "2025-Q1",
        "Quota": 50
    },
    {
        "Airport_Airline": "ATH-A3",
        "Quarter": "2025-Q1",
        "Quota": 100
    },
    {
        "Airport_Airline": "CDG-AF",
        "Quarter": "2025-Q1",
        "Quota": 150
    },
    {
        "Airport_Airline": "HEL-AY",
        "Quarter": "2025-Q1",
        "Quota": 150
    },
    {
        "Airport_Airline": "LHR-BA",
        "Quarter": "2025-Q1",
        "Quota": 150
    },
    {
        "Airport_Airline": "RIX-BT",
        "Quarter": "2025-Q1",
        "Quota": 50
    },
    {
        "Airport_Airline": "TLV-BZ",
        "Quarter": "2025-Q1",
        "Quota": 50
    },
    {
        "Airport_Airline": "CKG-CA",
        "Quarter": "2025-Q1",
        "Quota": 100
    },
    {
        "Airport_Airline": "PEK-CA",
        "Quarter": "2025-Q1",
        "Quota": 150
    },
    {
        "Airport_Airline": "CAN-CZ",
        "Quarter": "2025-Q1",
        "Quota": 150
    },
    {
        "Airport_Airline": "ARN-D8",
        "Quarter": "2025-Q1",
        "Quota": 50
    },
    {
        "Airport_Airline": "CPH-D8",
        "Quarter": "2025-Q1",
        "Quota": 50
    },
    {
        "Airport_Airline": "OSL-DY",
        "Quarter": "2025-Q1",
        "Quota": 100
    },
    {
        "Airport_Airline": "DUB-EI",
        "Quarter": "2025-Q1",
        "Quota": 100
    },
    {
        "Airport_Airline": "DXB-EK",
        "Quarter": "2025-Q1",
        "Quota": 150
    },
    {
        "Airport_Airline": "CGN-EW",
        "Quarter": "2025-Q1",
        "Quota": 100
    },
    {
        "Airport_Airline": "DUS-EW",
        "Quarter": "2025-Q1",
        "Quota": 100
    },
    {
        "Airport_Airline": "HAM-EW",
        "Quarter": "2025-Q1",
        "Quota": 100
    },
    {
        "Airport_Airline": "STR-EW",
        "Quarter": "2025-Q1",
        "Quota": 100
    },
    {
        "Airport_Airline": "NGB-FM",
        "Quarter": "2025-Q1",
        "Quota": 100
    },
    {
        "Airport_Airline": "PVG-FM",
        "Quarter": "2025-Q1",
        "Quota": 150
    },
    {
        "Airport_Airline": "XIY-FM",
        "Quarter": "2025-Q1",
        "Quota": 100
    },
    {
        "Airport_Airline": "AGP-FR",
        "Quarter": "2025-Q1",
        "Quota": 31
    },
    {
        "Airport_Airline": "ALC-FR",
        "Quarter": "2025-Q1",
        "Quota": 18
    },
    {
        "Airport_Airline": "ARN-FR",
        "Quarter": "2025-Q1",
        "Quota": 50
    },
    {
        "Airport_Airline": "ATH-FR",
        "Quarter": "2025-Q1",
        "Quota": 50
    },
    {
        "Airport_Airline": "BCN-FR",
        "Quarter": "2025-Q1",
        "Quota": 50
    },
    {
        "Airport_Airline": "BER-FR",
        "Quarter": "2025-Q1",
        "Quota": 50
    },
    {
        "Airport_Airline": "BGY-FR",
        "Quarter": "2025-Q1",
        "Quota": 50
    },
    {
        "Airport_Airline": "BHX-FR",
        "Quarter": "2025-Q1",
        "Quota": 50
    },
    {
        "Airport_Airline": "BLL-FR",
        "Quarter": "2025-Q1",
        "Quota": 50
    },
    {
        "Airport_Airline": "BLQ-FR",
        "Quarter": "2025-Q1",
        "Quota": 50
    },
    {
        "Airport_Airline": "BRI-FR",
        "Quarter": "2025-Q1",
        "Quota": 50
    },
    {
        "Airport_Airline": "BRS-FR",
        "Quarter": "2025-Q1",
        "Quota": 50
    },
    {
        "Airport_Airline": "BVA-FR",
        "Quarter": "2025-Q1",
        "Quota": 50
    },
    {
        "Airport_Airline": "CAG-FR",
        "Quarter": "2025-Q1",
        "Quota": 50
    },
    {
        "Airport_Airline": "CIA-FR",
        "Quarter": "2025-Q1",
        "Quota": 50
    },
    {
        "Airport_Airline": "CPH-FR",
        "Quarter": "2025-Q1",
        "Quota": 50
    },
    {
        "Airport_Airline": "CRL-FR",
        "Quarter": "2025-Q1",
        "Quota": 50
    },
    {
        "Airport_Airline": "CTA-FR",
        "Quarter": "2025-Q1",
        "Quota": 50
    },
    {
        "Airport_Airline": "DUB-FR",
        "Quarter": "2025-Q1",
        "Quota": 50
    },
    {
        "Airport_Airline": "EDI-FR",
        "Quarter": "2025-Q1",
        "Quota": 50
    },
    {
        "Airport_Airline": "FAO-FR",
        "Quarter": "2025-Q1",
        "Quota": 12
    },
    {
        "Airport_Airline": "GOT-FR",
        "Quarter": "2025-Q1",
        "Quota": 50
    },
    {
        "Airport_Airline": "HHN-FR",
        "Quarter": "2025-Q1",
        "Quota": 50
    },
    {
        "Airport_Airline": "LIS-FR",
        "Quarter": "2025-Q1",
        "Quota": 50
    },
    {
        "Airport_Airline": "LPA-FR",
        "Quarter": "2025-Q1",
        "Quota": 20
    },
    {
        "Airport_Airline": "LPL-FR",
        "Quarter": "2025-Q1",
        "Quota": 50
    },
    {
        "Airport_Airline": "MAD-FR",
        "Quarter": "2025-Q1",
        "Quota": 50
    },
    {
        "Airport_Airline": "MAN-FR",
        "Quarter": "2025-Q1",
        "Quota": 50
    },
    {
        "Airport_Airline": "MLA-FR",
        "Quarter": "2025-Q1",
        "Quota": 38
    },
    {
        "Airport_Airline": "MRS-FR",
        "Quarter": "2025-Q1",
        "Quota": 50
    },
    {
        "Airport_Airline": "MXP-FR",
        "Quarter": "2025-Q1",
        "Quota": 50
    },
    {
        "Airport_Airline": "NAP-FR",
        "Quarter": "2025-Q1",
        "Quota": 50
    },
    {
        "Airport_Airline": "NUE-FR",
        "Quarter": "2025-Q1",
        "Quota": 50
    },
    {
        "Airport_Airline": "OPO-FR",
        "Quarter": "2025-Q1",
        "Quota": 50
    },
    {
        "Airport_Airline": "PFO-FR",
        "Quarter": "2025-Q1",
        "Quota": 22
    },
    {
        "Airport_Airline": "PMO-FR",
        "Quarter": "2025-Q1",
        "Quota": 50
    },
    {
        "Airport_Airline": "PRG-FR",
        "Quarter": "2025-Q1",
        "Quota": 50
    },
    {
        "Airport_Airline": "PSA-FR",
        "Quarter": "2025-Q1",
        "Quota": 50
    },
    {
        "Airport_Airline": "SKG-FR",
        "Quarter": "2025-Q1",
        "Quota": 75
    },
    {
        "Airport_Airline": "SNN-FR",
        "Quarter": "2025-Q1",
        "Quota": 50
    },
    {
        "Airport_Airline": "SOF-FR",
        "Quarter": "2025-Q1",
        "Quota": 50
    },
    {
        "Airport_Airline": "STN-FR",
        "Quarter": "2025-Q1",
        "Quota": 50
    },
    {
        "Airport_Airline": "SVQ-FR",
        "Quarter": "2025-Q1",
        "Quota": 50
    },
    {
        "Airport_Airline": "TFS-FR",
        "Quarter": "2025-Q1",
        "Quota": 20
    },
    {
        "Airport_Airline": "TIA-FR",
        "Quarter": "2025-Q1",
        "Quota": 50
    },
    {
        "Airport_Airline": "TLS-FR",
        "Quarter": "2025-Q1",
        "Quota": 50
    },
    {
        "Airport_Airline": "TLV-FR",
        "Quarter": "2025-Q1",
        "Quota": 50
    },
    {
        "Airport_Airline": "TRS-FR",
        "Quarter": "2025-Q1",
        "Quota": 50
    },
    {
        "Airport_Airline": "TSF-FR",
        "Quarter": "2025-Q1",
        "Quota": 50
    },
    {
        "Airport_Airline": "VLC-FR",
        "Quarter": "2025-Q1",
        "Quota": 18
    },
    {
        "Airport_Airline": "DXB-FZ",
        "Quarter": "2025-Q1",
        "Quota": 100
    },
    {
        "Airport_Airline": "TAS-HH",
        "Quarter": "2025-Q1",
        "Quota": 50
    },
    {
        "Airport_Airline": "SZX-HU",
        "Quarter": "2025-Q1",
        "Quota": 150
    },
    {
        "Airport_Airline": "MAD-IB",
        "Quarter": "2025-Q1",
        "Quota": 150
    },
    {
        "Airport_Airline": "TLV-IZ",
        "Quarter": "2025-Q1",
        "Quota": 50
    },
    {
        "Airport_Airline": "BEG-JU",
        "Quarter": "2025-Q1",
        "Quota": 100
    },
    {
        "Airport_Airline": "ICN-KE",
        "Quarter": "2025-Q1",
        "Quota": 150
    },
    {
        "Airport_Airline": "AMS-KL",
        "Quarter": "2025-Q1",
        "Quota": 150
    },
    {
        "Airport_Airline": "LUX-LG",
        "Quarter": "2025-Q1",
        "Quota": 50
    },
    {
        "Airport_Airline": "FRA-LH",
        "Quarter": "2025-Q1",
        "Quota": 150
    },
    {
        "Airport_Airline": "MUC-LH",
        "Quarter": "2025-Q1",
        "Quota": 150
    },
    {
        "Airport_Airline": "ICN-LO",
        "Quarter": "2025-Q1",
        "Quota": 100
    },
    {
        "Airport_Airline": "WAW-LO",
        "Quarter": "2025-Q1",
        "Quota": 150
    },
    {
        "Airport_Airline": "BHX-LS",
        "Quarter": "2025-Q1",
        "Quota": 50
    },
    {
        "Airport_Airline": "LBA-LS",
        "Quarter": "2025-Q1",
        "Quota": 50
    },
    {
        "Airport_Airline": "MAN-LS",
        "Quarter": "2025-Q1",
        "Quota": 50
    },
    {
        "Airport_Airline": "ZRH-LX",
        "Quarter": "2025-Q1",
        "Quota": 100
    },
    {
        "Airport_Airline": "TLV-LY",
        "Quarter": "2025-Q1",
        "Quota": 100
    },
    {
        "Airport_Airline": "CAI-MS",
        "Quarter": "2025-Q1",
        "Quota": 100
    },
    {
        "Airport_Airline": "HRG-NP",
        "Quarter": "2025-Q1",
        "Quota": 50
    },
    {
        "Airport_Airline": "VIE-OS",
        "Quarter": "2025-Q1",
        "Quota": 150
    },
    {
        "Airport_Airline": "SAW-PC",
        "Quarter": "2025-Q1",
        "Quota": 100
    },
    {
        "Airport_Airline": "DOH-QR",
        "Quarter": "2025-Q1",
        "Quota": 150
    },
    {
        "Airport_Airline": "BFS-RK",
        "Quarter": "2025-Q1",
        "Quota": 50
    },
    {
        "Airport_Airline": "OTP-RO",
        "Quarter": "2025-Q1",
        "Quota": 50
    },
    {
        "Airport_Airline": "BRU-SN",
        "Quarter": "2025-Q1",
        "Quota": 50
    },
    {
        "Airport_Airline": "IST-TK",
        "Quarter": "2025-Q1",
        "Quota": 150
    },
    {
        "Airport_Airline": "BSL-U2",
        "Quarter": "2025-Q1",
        "Quota": 50
    },
    {
        "Airport_Airline": "CDG-U2",
        "Quarter": "2025-Q1",
        "Quota": 100
    },
    {
        "Airport_Airline": "GVA-U2",
        "Quarter": "2025-Q1",
        "Quota": 50
    },
    {
        "Airport_Airline": "LGW-U2",
        "Quarter": "2025-Q1",
        "Quota": 50
    },
    {
        "Airport_Airline": "LYS-U2",
        "Quarter": "2025-Q1",
        "Quota": 100
    },
    {
        "Airport_Airline": "SAW-VF",
        "Quarter": "2025-Q1",
        "Quota": 50
    },
    {
        "Airport_Airline": "BIO-VY",
        "Quarter": "2025-Q1",
        "Quota": 100
    },
    {
        "Airport_Airline": "NAP-W4",
        "Quarter": "2025-Q1",
        "Quota": 50
    },
    {
        "Airport_Airline": "AGP-W6",
        "Quarter": "2025-Q1",
        "Quota": 25
    },
    {
        "Airport_Airline": "ALC-W6",
        "Quarter": "2025-Q1",
        "Quota": 26
    },
    {
        "Airport_Airline": "AMM-W6",
        "Quarter": "2025-Q1",
        "Quota": 50
    },
    {
        "Airport_Airline": "ARN-W6",
        "Quarter": "2025-Q1",
        "Quota": 50
    },
    {
        "Airport_Airline": "ATH-W6",
        "Quarter": "2025-Q1",
        "Quota": 50
    },
    {
        "Airport_Airline": "AUH-W6",
        "Quarter": "2025-Q1",
        "Quota": 50
    },
    {
        "Airport_Airline": "BCN-W6",
        "Quarter": "2025-Q1",
        "Quota": 50
    },
    {
        "Airport_Airline": "BER-W6",
        "Quarter": "2025-Q1",
        "Quota": 50
    },
    {
        "Airport_Airline": "BHX-W6",
        "Quarter": "2025-Q1",
        "Quota": 50
    },
    {
        "Airport_Airline": "BRI-W6",
        "Quarter": "2025-Q1",
        "Quota": 50
    },
    {
        "Airport_Airline": "BRU-W6",
        "Quarter": "2025-Q1",
        "Quota": 100
    },
    {
        "Airport_Airline": "BSL-W6",
        "Quarter": "2025-Q1",
        "Quota": 50
    },
    {
        "Airport_Airline": "CPH-W6",
        "Quarter": "2025-Q1",
        "Quota": 50
    },
    {
        "Airport_Airline": "CRL-W6",
        "Quarter": "2025-Q1",
        "Quota": 50
    },
    {
        "Airport_Airline": "CTA-W6",
        "Quarter": "2025-Q1",
        "Quota": 50
    },
    {
        "Airport_Airline": "DTM-W6",
        "Quarter": "2025-Q1",
        "Quota": 50
    },
    {
        "Airport_Airline": "DXB-W6",
        "Quarter": "2025-Q1",
        "Quota": 50
    },
    {
        "Airport_Airline": "EIN-W6",
        "Quarter": "2025-Q1",
        "Quota": 50
    },
    {
        "Airport_Airline": "EVN-W6",
        "Quarter": "2025-Q1",
        "Quota": 50
    },
    {
        "Airport_Airline": "FCO-W6",
        "Quarter": "2025-Q1",
        "Quota": 50
    },
    {
        "Airport_Airline": "FMM-W6",
        "Quarter": "2025-Q1",
        "Quota": 50
    },
    {
        "Airport_Airline": "FNC-W6",
        "Quarter": "2025-Q1",
        "Quota": 21
    },
    {
        "Airport_Airline": "GHV-W6",
        "Quarter": "2025-Q1",
        "Quota": 50
    },
    {
        "Airport_Airline": "GLA-W6",
        "Quarter": "2025-Q1",
        "Quota": 50
    },
    {
        "Airport_Airline": "GOA-W6",
        "Quarter": "2025-Q1",
        "Quota": 100
    },
    {
        "Airport_Airline": "GYD-W6",
        "Quarter": "2025-Q1",
        "Quota": 50
    },
    {
        "Airport_Airline": "HRG-W6",
        "Quarter": "2025-Q1",
        "Quota": 50
    },
    {
        "Airport_Airline": "IST-W6",
        "Quarter": "2025-Q1",
        "Quota": 50
    },
    {
        "Airport_Airline": "JED-W6",
        "Quarter": "2025-Q1",
        "Quota": 50
    },
    {
        "Airport_Airline": "KEF-W6",
        "Quarter": "2025-Q1",
        "Quota": 50
    },
    {
        "Airport_Airline": "KUT-W6",
        "Quarter": "2025-Q1",
        "Quota": 50
    },
    {
        "Airport_Airline": "LCA-W6",
        "Quarter": "2025-Q1",
        "Quota": 30
    },
    {
        "Airport_Airline": "LGW-W6",
        "Quarter": "2025-Q1",
        "Quota": 50
    },
    {
        "Airport_Airline": "LIS-W6",
        "Quarter": "2025-Q1",
        "Quota": 50
    },
    {
        "Airport_Airline": "LPA-W6",
        "Quarter": "2025-Q1",
        "Quota": 18
    },
    {
        "Airport_Airline": "LPL-W6",
        "Quarter": "2025-Q1",
        "Quota": 50
    },
    {
        "Airport_Airline": "LTN-W6",
        "Quarter": "2025-Q1",
        "Quota": 50
    },
    {
        "Airport_Airline": "MAD-W6",
        "Quarter": "2025-Q1",
        "Quota": 50
    },
    {
        "Airport_Airline": "MLA-W6",
        "Quarter": "2025-Q1",
        "Quota": 39
    },
    {
        "Airport_Airline": "MXP-W6",
        "Quarter": "2025-Q1",
        "Quota": 50
    },
    {
        "Airport_Airline": "NAP-W6",
        "Quarter": "2025-Q1",
        "Quota": 50
    },
    {
        "Airport_Airline": "NCE-W6",
        "Quarter": "2025-Q1",
        "Quota": 50
    },
    {
        "Airport_Airline": "ORY-W6",
        "Quarter": "2025-Q1",
        "Quota": 50
    },
    {
        "Airport_Airline": "OTP-W6",
        "Quarter": "2025-Q1",
        "Quota": 50
    },
    {
        "Airport_Airline": "QSR-W6",
        "Quarter": "2025-Q1",
        "Quota": 50
    },
    {
        "Airport_Airline": "RAK-W6",
        "Quarter": "2025-Q1",
        "Quota": 100
    },
    {
        "Airport_Airline": "RMO-W6",
        "Quarter": "2025-Q1",
        "Quota": 60
    },
    {
        "Airport_Airline": "RUH-W6",
        "Quarter": "2025-Q1",
        "Quota": 50
    },
    {
        "Airport_Airline": "SKG-W6",
        "Quarter": "2025-Q1",
        "Quota": 65
    },
    {
        "Airport_Airline": "SKP-W6",
        "Quarter": "2025-Q1",
        "Quota": 50
    },
    {
        "Airport_Airline": "SPX-W6",
        "Quarter": "2025-Q1",
        "Quota": 50
    },
    {
        "Airport_Airline": "SSH-W6",
        "Quarter": "2025-Q1",
        "Quota": 50
    },
    {
        "Airport_Airline": "STR-W6",
        "Quarter": "2025-Q1",
        "Quota": 50
    },
    {
        "Airport_Airline": "TFS-W6",
        "Quarter": "2025-Q1",
        "Quota": 42
    },
    {
        "Airport_Airline": "TGD-W6",
        "Quarter": "2025-Q1",
        "Quota": 50
    },
    {
        "Airport_Airline": "TGM-W6",
        "Quarter": "2025-Q1",
        "Quota": 50
    },
    {
        "Airport_Airline": "TIA-W6",
        "Quarter": "2025-Q1",
        "Quota": 50
    },
    {
        "Airport_Airline": "TLV-W6",
        "Quarter": "2025-Q1",
        "Quota": 50
    },
    {
        "Airport_Airline": "VLC-W6",
        "Quarter": "2025-Q1",
        "Quota": 20
    },
    {
        "Airport_Airline": "WAW-W6",
        "Quarter": "2025-Q1",
        "Quota": 50
    },
    {
        "Airport_Airline": "AYT-XQ",
        "Quarter": "2025-Q1",
        "Quota": 50
    },



    
   {
        "Airport_Airline": "TLV-6H",
        "Quarter": "2025-Q2",
        "Quota": 50
    },
    {
        "Airport_Airline": "ATH-A3",
        "Quarter": "2025-Q2",
        "Quota": 100
    },
    {
        "Airport_Airline": "CDG-AF",
        "Quarter": "2025-Q2",
        "Quota": 150
    },
    {
        "Airport_Airline": "HEL-AY",
        "Quarter": "2025-Q2",
        "Quota": 150
    },
    {
        "Airport_Airline": "LHR-BA",
        "Quarter": "2025-Q2",
        "Quota": 150
    },
    {
        "Airport_Airline": "RIX-BT",
        "Quarter": "2025-Q2",
        "Quota": 50
    },
    {
        "Airport_Airline": "TLV-BZ",
        "Quarter": "2025-Q2",
        "Quota": 50
    },
    {
        "Airport_Airline": "CKG-CA",
        "Quarter": "2025-Q2",
        "Quota": 100
    },
    {
        "Airport_Airline": "PEK-CA",
        "Quarter": "2025-Q2",
        "Quota": 150
    },
    {
        "Airport_Airline": "CAN-CZ",
        "Quarter": "2025-Q2",
        "Quota": 150
    },
    {
        "Airport_Airline": "ARN-D8",
        "Quarter": "2025-Q2",
        "Quota": 50
    },
    {
        "Airport_Airline": "CPH-D8",
        "Quarter": "2025-Q2",
        "Quota": 50
    },
    {
        "Airport_Airline": "CIT-DV",
        "Quarter": "2025-Q2",
        "Quota": 100
    },
    {
        "Airport_Airline": "OSL-DY",
        "Quarter": "2025-Q2",
        "Quota": 100
    },
    {
        "Airport_Airline": "DUB-EI",
        "Quarter": "2025-Q2",
        "Quota": 100
    },
    {
        "Airport_Airline": "DXB-EK",
        "Quarter": "2025-Q2",
        "Quota": 150
    },
    {
        "Airport_Airline": "CGN-EW",
        "Quarter": "2025-Q2",
        "Quota": 100
    },
    {
        "Airport_Airline": "DUS-EW",
        "Quarter": "2025-Q2",
        "Quota": 100
    },
    {
        "Airport_Airline": "HAM-EW",
        "Quarter": "2025-Q2",
        "Quota": 100
    },
    {
        "Airport_Airline": "STR-EW",
        "Quarter": "2025-Q2",
        "Quota": 100
    },
    {
        "Airport_Airline": "NGB-FM",
        "Quarter": "2025-Q2",
        "Quota": 100
    },
    {
        "Airport_Airline": "PVG-FM",
        "Quarter": "2025-Q2",
        "Quota": 150
    },
    {
        "Airport_Airline": "XIY-FM",
        "Quarter": "2025-Q2",
        "Quota": 100
    },
    {
        "Airport_Airline": "ACE-FR",
        "Quarter": "2025-Q2",
        "Quota": 8
    },
    {
        "Airport_Airline": "AGP-FR",
        "Quarter": "2025-Q2",
        "Quota": 15
    },
    {
        "Airport_Airline": "AHO-FR",
        "Quarter": "2025-Q2",
        "Quota": 15
    },
    {
        "Airport_Airline": "ALC-FR",
        "Quarter": "2025-Q2",
        "Quota": 15
    },
    {
        "Airport_Airline": "AMM-FR",
        "Quarter": "2025-Q2",
        "Quota": 50
    },
    {
        "Airport_Airline": "ARN-FR",
        "Quarter": "2025-Q2",
        "Quota": 50
    },
    {
        "Airport_Airline": "ATH-FR",
        "Quarter": "2025-Q2",
        "Quota": 50
    },
    {
        "Airport_Airline": "BCN-FR",
        "Quarter": "2025-Q2",
        "Quota": 50
    },
    {
        "Airport_Airline": "BER-FR",
        "Quarter": "2025-Q2",
        "Quota": 50
    },
    {
        "Airport_Airline": "BFS-FR",
        "Quarter": "2025-Q2",
        "Quota": 50
    },
    {
        "Airport_Airline": "BGY-FR",
        "Quarter": "2025-Q2",
        "Quota": 50
    },
    {
        "Airport_Airline": "BHX-FR",
        "Quarter": "2025-Q2",
        "Quota": 50
    },
    {
        "Airport_Airline": "BLQ-FR",
        "Quarter": "2025-Q2",
        "Quota": 50
    },
    {
        "Airport_Airline": "BOJ-FR",
        "Quarter": "2025-Q2",
        "Quota": 50
    },
    {
        "Airport_Airline": "BRI-FR",
        "Quarter": "2025-Q2",
        "Quota": 50
    },
    {
        "Airport_Airline": "BRS-FR",
        "Quarter": "2025-Q2",
        "Quota": 50
    },
    {
        "Airport_Airline": "BVA-FR",
        "Quarter": "2025-Q2",
        "Quota": 50
    },
    {
        "Airport_Airline": "CAG-FR",
        "Quarter": "2025-Q2",
        "Quota": 50
    },
    {
        "Airport_Airline": "CFU-FR",
        "Quarter": "2025-Q2",
        "Quota": 10
    },
    {
        "Airport_Airline": "CHQ-FR",
        "Quarter": "2025-Q2",
        "Quota": 10
    },
    {
        "Airport_Airline": "CIA-FR",
        "Quarter": "2025-Q2",
        "Quota": 50
    },
    {
        "Airport_Airline": "CPH-FR",
        "Quarter": "2025-Q2",
        "Quota": 50
    },
    {
        "Airport_Airline": "CRL-FR",
        "Quarter": "2025-Q2",
        "Quota": 50
    },
    {
        "Airport_Airline": "CTA-FR",
        "Quarter": "2025-Q2",
        "Quota": 50
    },
    {
        "Airport_Airline": "DUB-FR",
        "Quarter": "2025-Q2",
        "Quota": 50
    },
    {
        "Airport_Airline": "EDI-FR",
        "Quarter": "2025-Q2",
        "Quota": 50
    },
    {
        "Airport_Airline": "EMA-FR",
        "Quarter": "2025-Q2",
        "Quota": 50
    },
    {
        "Airport_Airline": "FAO-FR",
        "Quarter": "2025-Q2",
        "Quota": 10
    },
    {
        "Airport_Airline": "GOT-FR",
        "Quarter": "2025-Q2",
        "Quota": 50
    },
    {
        "Airport_Airline": "HHN-FR",
        "Quarter": "2025-Q2",
        "Quota": 50
    },
    {
        "Airport_Airline": "JSI-FR",
        "Quarter": "2025-Q2",
        "Quota": 10
    },
    {
        "Airport_Airline": "LIS-FR",
        "Quarter": "2025-Q2",
        "Quota": 50
    },
    {
        "Airport_Airline": "LPA-FR",
        "Quarter": "2025-Q2",
        "Quota": 8
    },
    {
        "Airport_Airline": "LPL-FR",
        "Quarter": "2025-Q2",
        "Quota": 50
    },
    {
        "Airport_Airline": "MAD-FR",
        "Quarter": "2025-Q2",
        "Quota": 50
    },
    {
        "Airport_Airline": "MAN-FR",
        "Quarter": "2025-Q2",
        "Quota": 50
    },
    {
        "Airport_Airline": "MLA-FR",
        "Quarter": "2025-Q2",
        "Quota": 30
    },
    {
        "Airport_Airline": "MRS-FR",
        "Quarter": "2025-Q2",
        "Quota": 50
    },
    {
        "Airport_Airline": "MXP-FR",
        "Quarter": "2025-Q2",
        "Quota": 50
    },
    {
        "Airport_Airline": "NAP-FR",
        "Quarter": "2025-Q2",
        "Quota": 50
    },
    {
        "Airport_Airline": "NUE-FR",
        "Quarter": "2025-Q2",
        "Quota": 50
    },
    {
        "Airport_Airline": "OPO-FR",
        "Quarter": "2025-Q2",
        "Quota": 50
    },
    {
        "Airport_Airline": "PFO-FR",
        "Quarter": "2025-Q2",
        "Quota": 25
    },
    {
        "Airport_Airline": "PMI-FR",
        "Quarter": "2025-Q2",
        "Quota": 20
    },
    {
        "Airport_Airline": "PMO-FR",
        "Quarter": "2025-Q2",
        "Quota": 50
    },
    {
        "Airport_Airline": "PRG-FR",
        "Quarter": "2025-Q2",
        "Quota": 50
    },
    {
        "Airport_Airline": "PSA-FR",
        "Quarter": "2025-Q2",
        "Quota": 50
    },
    {
        "Airport_Airline": "PVK-FR",
        "Quarter": "2025-Q2",
        "Quota": 10
    },
    {
        "Airport_Airline": "JMK-FR",
        "Quarter": "2025-Q2",
        "Quota": 10
    },
    {
        "Airport_Airline": "CDT-FR",
        "Quarter": "2025-Q2",
        "Quota": 10
    },
    {
        "Airport_Airline": "RHO-FR",
        "Quarter": "2025-Q2",
        "Quota": 10
    },
    {
        "Airport_Airline": "RMI-FR",
        "Quarter": "2025-Q2",
        "Quota": 50
    },
    {
        "Airport_Airline": "SKG-FR",
        "Quarter": "2025-Q2",
        "Quota": 40
    },
    {
        "Airport_Airline": "SNN-FR",
        "Quarter": "2025-Q2",
        "Quota": 50
    },
    {
        "Airport_Airline": "SOF-FR",
        "Quarter": "2025-Q2",
        "Quota": 50
    },
    {
        "Airport_Airline": "STN-FR",
        "Quarter": "2025-Q2",
        "Quota": 50
    },
    {
        "Airport_Airline": "SVQ-FR",
        "Quarter": "2025-Q2",
        "Quota": 50
    },
    {
        "Airport_Airline": "TFS-FR",
        "Quarter": "2025-Q2",
        "Quota": 24
    },
    {
        "Airport_Airline": "TIA-FR",
        "Quarter": "2025-Q2",
        "Quota": 50
    },
    {
        "Airport_Airline": "TLS-FR",
        "Quarter": "2025-Q2",
        "Quota": 50
    },
    {
        "Airport_Airline": "TLV-FR",
        "Quarter": "2025-Q2",
        "Quota": 50
    },
    {
        "Airport_Airline": "TRS-FR",
        "Quarter": "2025-Q2",
        "Quota": 50
    },
    {
        "Airport_Airline": "TSF-FR",
        "Quarter": "2025-Q2",
        "Quota": 50
    },
    {
        "Airport_Airline": "VLC-FR",
        "Quarter": "2025-Q2",
        "Quota": 15
    },
    {
        "Airport_Airline": "WMI-FR",
        "Quarter": "2025-Q2",
        "Quota": 50
    },
    {
        "Airport_Airline": "ZAD-FR",
        "Quarter": "2025-Q2",
        "Quota": 50
    },
    {
        "Airport_Airline": "ZTH-FR",
        "Quarter": "2025-Q2",
        "Quota": 10
    },
    {
        "Airport_Airline": "DXB-FZ",
        "Quarter": "2025-Q2",
        "Quota": 100
    },
    {
        "Airport_Airline": "SZX-HU",
        "Quarter": "2025-Q2",
        "Quota": 100
    },
    {
        "Airport_Airline": "MAD-IB",
        "Quarter": "2025-Q2",
        "Quota": 150
    },
    {
        "Airport_Airline": "TLV-IZ",
        "Quarter": "2025-Q2",
        "Quota": 50
    },
    {
        "Airport_Airline": "BEG-JU",
        "Quarter": "2025-Q2",
        "Quota": 100
    },
    {
        "Airport_Airline": "KWI-J9",
        "Quarter": "2025-Q2",
        "Quota": 150
    },
    {
        "Airport_Airline": "ICN-KE",
        "Quarter": "2025-Q2",
        "Quota": 150
    },
    {
        "Airport_Airline": "AMS-KL",
        "Quarter": "2025-Q2",
        "Quota": 150
    },
    {
        "Airport_Airline": "LUX-LG",
        "Quarter": "2025-Q2",
        "Quota": 50
    },
    {
        "Airport_Airline": "FRA-LH",
        "Quarter": "2025-Q2",
        "Quota": 150
    },
    {
        "Airport_Airline": "MUC-LH",
        "Quarter": "2025-Q2",
        "Quota": 150
    },
    {
        "Airport_Airline": "WAW-LO",
        "Quarter": "2025-Q2",
        "Quota": 150
    },
    {
        "Airport_Airline": "BHX-LS",
        "Quarter": "2025-Q2",
        "Quota": 50
    },
    {
        "Airport_Airline": "LBA-LS",
        "Quarter": "2025-Q2",
        "Quota": 50
    },
    {
        "Airport_Airline": "MAN-LS",
        "Quarter": "2025-Q2",
        "Quota": 50
    },
    {
        "Airport_Airline": "ZRH-LX",
        "Quarter": "2025-Q2",
        "Quota": 100
    },
    {
        "Airport_Airline": "TLV-LY",
        "Quarter": "2025-Q2",
        "Quota": 100
    },
    {
        "Airport_Airline": "CAI-MS",
        "Quarter": "2025-Q2",
        "Quota": 50
    },
    {
        "Airport_Airline": "HRG-NP",
        "Quarter": "2025-Q2",
        "Quota": 50
    },
    {
        "Airport_Airline": "VIE-OS",
        "Quarter": "2025-Q2",
        "Quota": 100
    },
    {
        "Airport_Airline": "SAW-PC",
        "Quarter": "2025-Q2",
        "Quota": 100
    },
    {
        "Airport_Airline": "DOH-QR",
        "Quarter": "2025-Q2",
        "Quota": 150
    },
    {
        "Airport_Airline": "OTP-RO",
        "Quarter": "2025-Q2",
        "Quota": 50
    },
    {
        "Airport_Airline": "CPH-SK",
        "Quarter": "2025-Q2",
        "Quota": 150
    },
    {
        "Airport_Airline": "BRU-SN",
        "Quarter": "2025-Q2",
        "Quota": 50
    },
    {
        "Airport_Airline": "IST-TK",
        "Quarter": "2025-Q2",
        "Quota": 150
    },
    {
        "Airport_Airline": "LGW-TOM",
        "Quarter": "2025-Q2",
        "Quota": 100
    },
    {
        "Airport_Airline": "MAN-TOM",
        "Quarter": "2025-Q2",
        "Quota": 100
    },
    {
        "Airport_Airline": "BSL-U2",
        "Quarter": "2025-Q2",
        "Quota": 50
    },
    {
        "Airport_Airline": "CDG-U2",
        "Quarter": "2025-Q2",
        "Quota": 100
    },
    {
        "Airport_Airline": "GVA-U2",
        "Quarter": "2025-Q2",
        "Quota": 50
    },
    {
        "Airport_Airline": "LGW-U2",
        "Quarter": "2025-Q2",
        "Quota": 50
    },
    {
        "Airport_Airline": "LYS-U2",
        "Quarter": "2025-Q2",
        "Quota": 100
    },
    {
        "Airport_Airline": "SAW-VF",
        "Quarter": "2025-Q2",
        "Quota": 50
    },
    {
        "Airport_Airline": "AGP-W6",
        "Quarter": "2025-Q2",
        "Quota": 15
    },
    {
        "Airport_Airline": "ALC-W6",
        "Quarter": "2025-Q2",
        "Quota": 25
    },
    {
        "Airport_Airline": "AMM-W6",
        "Quarter": "2025-Q2",
        "Quota": 50
    },
    {
        "Airport_Airline": "ARN-W6",
        "Quarter": "2025-Q2",
        "Quota": 50
    },
    {
        "Airport_Airline": "ATH-W6",
        "Quarter": "2025-Q2",
        "Quota": 50
    },
    {
        "Airport_Airline": "AUH-W6",
        "Quarter": "2025-Q2",
        "Quota": 50
    },
    {
        "Airport_Airline": "BCN-W6",
        "Quarter": "2025-Q2",
        "Quota": 50
    },
    {
        "Airport_Airline": "BER-W6",
        "Quarter": "2025-Q2",
        "Quota": 50
    },
    {
        "Airport_Airline": "BHX-W6",
        "Quarter": "2025-Q2",
        "Quota": 50
    },
    {
        "Airport_Airline": "BRI-W6",
        "Quarter": "2025-Q2",
        "Quota": 50
    },
    {
        "Airport_Airline": "BSL-W6",
        "Quarter": "2025-Q2",
        "Quota": 50
    },
    {
        "Airport_Airline": "CPH-W6",
        "Quarter": "2025-Q2",
        "Quota": 50
    },
    {
        "Airport_Airline": "CRL-W6",
        "Quarter": "2025-Q2",
        "Quota": 50
    },
    {
        "Airport_Airline": "CTA-W6",
        "Quarter": "2025-Q2",
        "Quota": 50
    },
    {
        "Airport_Airline": "DTM-W6",
        "Quarter": "2025-Q2",
        "Quota": 50
    },
    {
        "Airport_Airline": "DXB-W6",
        "Quarter": "2025-Q2",
        "Quota": 50
    },
    {
        "Airport_Airline": "EIN-W6",
        "Quarter": "2025-Q2",
        "Quota": 50
    },
    {
        "Airport_Airline": "EVN-W6",
        "Quarter": "2025-Q2",
        "Quota": 50
    },
    {
        "Airport_Airline": "FCO-W6",
        "Quarter": "2025-Q2",
        "Quota": 50
    },
    {
        "Airport_Airline": "FMM-W6",
        "Quarter": "2025-Q2",
        "Quota": 50
    },
    {
        "Airport_Airline": "FNC-W6",
        "Quarter": "2025-Q2",
        "Quota": 10
    },
    {
        "Airport_Airline": "GHV-W6",
        "Quarter": "2025-Q2",
        "Quota": 50
    },
    {
        "Airport_Airline": "GLA-W6",
        "Quarter": "2025-Q2",
        "Quota": 50
    },
    {
        "Airport_Airline": "GOA-W6",
        "Quarter": "2025-Q2",
        "Quota": 100
    },
    {
        "Airport_Airline": "GRO-W6",
        "Quarter": "2025-Q2",
        "Quota": 50
    },
    {
        "Airport_Airline": "GYD-W6",
        "Quarter": "2025-Q2",
        "Quota": 50
    },
    {
        "Airport_Airline": "HRG-W6",
        "Quarter": "2025-Q2",
        "Quota": 50
    },
    {
        "Airport_Airline": "IST-W6",
        "Quarter": "2025-Q2",
        "Quota": 50
    },
    {
        "Airport_Airline": "JED-W6",
        "Quarter": "2025-Q2",
        "Quota": 50
    },
    {
        "Airport_Airline": "KEF-W6",
        "Quarter": "2025-Q2",
        "Quota": 50
    },
    {
        "Airport_Airline": "KUT-W6",
        "Quarter": "2025-Q2",
        "Quota": 50
    },
    {
        "Airport_Airline": "LCA-W6",
        "Quarter": "2025-Q2",
        "Quota": 30
    },
    {
        "Airport_Airline": "LGW-W6",
        "Quarter": "2025-Q2",
        "Quota": 50
    },
    {
        "Airport_Airline": "LIS-W6",
        "Quarter": "2025-Q2",
        "Quota": 50
    },
    {
        "Airport_Airline": "LPA-W6",
        "Quarter": "2025-Q2",
        "Quota": 20
    },
    {
        "Airport_Airline": "LPL-W6",
        "Quarter": "2025-Q2",
        "Quota": 50
    },
    {
        "Airport_Airline": "LTN-W6",
        "Quarter": "2025-Q2",
        "Quota": 50
    },
    {
        "Airport_Airline": "MAD-W6",
        "Quarter": "2025-Q2",
        "Quota": 50
    },
    {
        "Airport_Airline": "MLA-W6",
        "Quarter": "2025-Q2",
        "Quota": 25
    },
    {
        "Airport_Airline": "MXP-W6",
        "Quarter": "2025-Q2",
        "Quota": 50
    },
    {
        "Airport_Airline": "NAP-W4",
        "Quarter": "2025-Q2",
        "Quota": 50
    },
    {
        "Airport_Airline": "NCE-W6",
        "Quarter": "2025-Q2",
        "Quota": 50
    },
    {
        "Airport_Airline": "ORY-W6",
        "Quarter": "2025-Q2",
        "Quota": 50
    },
    {
        "Airport_Airline": "PMI-W6",
        "Quarter": "2025-Q2",
        "Quota": 10
    },
    {
        "Airport_Airline": "RAK-W6",
        "Quarter": "2025-Q2",
        "Quota": 100
    },
    {
        "Airport_Airline": "RHO-W6",
        "Quarter": "2025-Q2",
        "Quota": 10
    },
    {
        "Airport_Airline": "RMO-W6",
        "Quarter": "2025-Q2",
        "Quota": 20
    },
    {
        "Airport_Airline": "SKG-W6",
        "Quarter": "2025-Q2",
        "Quota": 30
    },
    {
        "Airport_Airline": "SPX-W6",
        "Quarter": "2025-Q2",
        "Quota": 50
    },
    {
        "Airport_Airline": "STR-W6",
        "Quarter": "2025-Q2",
        "Quota": 50
    },
    {
        "Airport_Airline": "TFS-W6",
        "Quarter": "2025-Q2",
        "Quota": 40
    },
    {
        "Airport_Airline": "TGD-W6",
        "Quarter": "2025-Q2",
        "Quota": 50
    },
    {
        "Airport_Airline": "TGM-W6",
        "Quarter": "2025-Q2",
        "Quota": 50
    },
    {
        "Airport_Airline": "TIA-W6",
        "Quarter": "2025-Q2",
        "Quota": 50
    },
    {
        "Airport_Airline": "TLV-W6",
        "Quarter": "2025-Q2",
        "Quota": 50
    },
    {
        "Airport_Airline": "VCE-W4",
        "Quarter": "2025-Q2",
        "Quota": 50
    },
    {
        "Airport_Airline": "AHO-W6",
        "Quarter": "2025-Q2",
        "Quota": 10
    },
    {
        "Airport_Airline": "JTR-W6",
        "Quarter": "2025-Q2",
        "Quota": 50
    },
    {
        "Airport_Airline": "AYT-W6",
        "Quarter": "2025-Q2",
        "Quota": 50
    },
    {
        "Airport_Airline": "ZTH-W6",
        "Quarter": "2025-Q2",
        "Quota": 10
    },
    {
        "Airport_Airline": "BOJ-W6",
        "Quarter": "2025-Q2",
        "Quota": 50
    },
    {
        "Airport_Airline": "CFU-W6",
        "Quarter": "2025-Q2",
        "Quota": 10
    },
    {
        "Airport_Airline": "BBU-W6",
        "Quarter": "2025-Q2",
        "Quota": 50
    },
    {
        "Airport_Airline": "HER-W6",
        "Quarter": "2025-Q2",
        "Quota": 10
    },
    {
        "Airport_Airline": "VLC-W6",
        "Quarter": "2025-Q2",
        "Quota": 20
    },
    {
        "Airport_Airline": "WAW-W6",
        "Quarter": "2025-Q2",
        "Quota": 50
    },
    {
        "Airport_Airline": "ADB-XQ",
        "Quarter": "2025-Q2",
        "Quota": 50
    },
    {
        "Airport_Airline": "AYT-XQ",
        "Quarter": "2025-Q2",
        "Quota": 50
    },



       {
        "Airport_Airline": "TLV-6H",
        "Quarter": "2025-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "ATH-A3",
        "Quarter": "2025-Q3",
        "Quota": 100
    },
    {
        "Airport_Airline": "CDG-AF",
        "Quarter": "2025-Q3",
        "Quota": 150
    },
    {
        "Airport_Airline": "HEL-AY",
        "Quarter": "2025-Q3",
        "Quota": 150
    },
    {
        "Airport_Airline": "LHR-BA",
        "Quarter": "2025-Q3",
        "Quota": 150
    },
    {
        "Airport_Airline": "RIX-BT",
        "Quarter": "2025-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "TLV-BZ",
        "Quarter": "2025-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "CKG-CA",
        "Quarter": "2025-Q3",
        "Quota": 100
    },
    {
        "Airport_Airline": "PEK-CA",
        "Quarter": "2025-Q3",
        "Quota": 150
    },
    {
        "Airport_Airline": "CAN-CZ",
        "Quarter": "2025-Q3",
        "Quota": 150
    },
    {
        "Airport_Airline": "CIT-DV",
        "Quarter": "2025-Q3",
        "Quota": 100
    },
    {
        "Airport_Airline": "ARN-D8",
        "Quarter": "2025-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "CPH-D8",
        "Quarter": "2025-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "OSL-DY",
        "Quarter": "2025-Q3",
        "Quota": 100
    },
    {
        "Airport_Airline": "BSL-EC",
        "Quarter": "2025-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "CDG-EC",
        "Quarter": "2025-Q3",
        "Quota": 100
    },
    {
        "Airport_Airline": "GVA-EC",
        "Quarter": "2025-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "LGW-EC",
        "Quarter": "2025-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "LYS-EC",
        "Quarter": "2025-Q3",
        "Quota": 100
    },
    {
        "Airport_Airline": "DUB-EI",
        "Quarter": "2025-Q3",
        "Quota": 100
    },
    {
        "Airport_Airline": "DXB-EK",
        "Quarter": "2025-Q3",
        "Quota": 150
    },
    {
        "Airport_Airline": "CGN-EW",
        "Quarter": "2025-Q3",
        "Quota": 100
    },
    {
        "Airport_Airline": "DUS-EW",
        "Quarter": "2025-Q3",
        "Quota": 100
    },
    {
        "Airport_Airline": "HAM-EW",
        "Quarter": "2025-Q3",
        "Quota": 100
    },
    {
        "Airport_Airline": "STR-EW",
        "Quarter": "2025-Q3",
        "Quota": 100
    },
    {
        "Airport_Airline": "NGB-FM",
        "Quarter": "2025-Q3",
        "Quota": 100
    },
    {
        "Airport_Airline": "PVG-FM",
        "Quarter": "2025-Q3",
        "Quota": 150
    },
    {
        "Airport_Airline": "XIY-FM",
        "Quarter": "2025-Q3",
        "Quota": 100
    },
    {
        "Airport_Airline": "ACE-FR",
        "Quarter": "2025-Q3",
        "Quota": 9
    },
    {
        "Airport_Airline": "AGP-FR",
        "Quarter": "2025-Q3",
        "Quota": 12
    },
    {
        "Airport_Airline": "AHO-FR",
        "Quarter": "2025-Q3",
        "Quota": 10
    },
    {
        "Airport_Airline": "ALC-FR",
        "Quarter": "2025-Q3",
        "Quota": 20
    },
    {
        "Airport_Airline": "ARN-FR",
        "Quarter": "2025-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "ATH-FR",
        "Quarter": "2025-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "BCN-FR",
        "Quarter": "2025-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "BER-FR",
        "Quarter": "2025-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "BFS-FR",
        "Quarter": "2025-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "BGY-FR",
        "Quarter": "2025-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "BHX-FR",
        "Quarter": "2025-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "BLQ-FR",
        "Quarter": "2025-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "BOJ-FR",
        "Quarter": "2025-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "BRI-FR",
        "Quarter": "2025-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "BRS-FR",
        "Quarter": "2025-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "BVA-FR",
        "Quarter": "2025-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "CAG-FR",
        "Quarter": "2025-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "CDT-FR",
        "Quarter": "2025-Q3",
        "Quota": 10
    },
    {
        "Airport_Airline": "CFU-FR",
        "Quarter": "2025-Q3",
        "Quota": 12
    },
    {
        "Airport_Airline": "CHQ-FR",
        "Quarter": "2025-Q3",
        "Quota": 12
    },
    {
        "Airport_Airline": "CIA-FR",
        "Quarter": "2025-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "CPH-FR",
        "Quarter": "2025-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "CRL-FR",
        "Quarter": "2025-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "CTA-FR",
        "Quarter": "2025-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "DUB-FR",
        "Quarter": "2025-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "EDI-FR",
        "Quarter": "2025-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "EMA-FR",
        "Quarter": "2025-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "FAO-FR",
        "Quarter": "2025-Q3",
        "Quota": 10
    },
    {
        "Airport_Airline": "GOT-FR",
        "Quarter": "2025-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "HHN-FR",
        "Quarter": "2025-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "JMK-FR",
        "Quarter": "2025-Q3",
        "Quota": 10
    },
    {
        "Airport_Airline": "JSI-FR",
        "Quarter": "2025-Q3",
        "Quota": 10
    },
    {
        "Airport_Airline": "KTW-FR",
        "Quarter": "2025-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "LIS-FR",
        "Quarter": "2025-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "LPA-FR",
        "Quarter": "2025-Q3",
        "Quota": 9
    },
    {
        "Airport_Airline": "LPL-FR",
        "Quarter": "2025-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "MAD-FR",
        "Quarter": "2025-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "MAN-FR",
        "Quarter": "2025-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "MLA-FR",
        "Quarter": "2025-Q3",
        "Quota": 27
    },
    {
        "Airport_Airline": "MRS-FR",
        "Quarter": "2025-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "MXP-FR",
        "Quarter": "2025-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "NAP-FR",
        "Quarter": "2025-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "NUE-FR",
        "Quarter": "2025-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "OPO-FR",
        "Quarter": "2025-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "PFO-FR",
        "Quarter": "2025-Q3",
        "Quota": 22
    },
    {
        "Airport_Airline": "PMI-FR",
        "Quarter": "2025-Q3",
        "Quota": 18
    },
    {
        "Airport_Airline": "PMO-FR",
        "Quarter": "2025-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "PRG-FR",
        "Quarter": "2025-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "PSA-FR",
        "Quarter": "2025-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "PVK-FR",
        "Quarter": "2025-Q3",
        "Quota": 10
    },
    {
        "Airport_Airline": "RHO-FR",
        "Quarter": "2025-Q3",
        "Quota": 12
    },
    {
        "Airport_Airline": "RMI-FR",
        "Quarter": "2025-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "SKG-FR",
        "Quarter": "2025-Q3",
        "Quota": 25
    },
    {
        "Airport_Airline": "SNN-FR",
        "Quarter": "2025-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "SOF-FR",
        "Quarter": "2025-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "STN-FR",
        "Quarter": "2025-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "SVQ-FR",
        "Quarter": "2025-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "TFS-FR",
        "Quarter": "2025-Q3",
        "Quota": 27
    },
    {
        "Airport_Airline": "TIA-FR",
        "Quarter": "2025-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "TLS-FR",
        "Quarter": "2025-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "TRS-FR",
        "Quarter": "2025-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "TSF-FR",
        "Quarter": "2025-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "VLC-FR",
        "Quarter": "2025-Q3",
        "Quota": 23
    },
    {
        "Airport_Airline": "WMI-FR",
        "Quarter": "2025-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "ZAD-FR",
        "Quarter": "2025-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "ZTH-FR",
        "Quarter": "2025-Q3",
        "Quota": 10
    },
    {
        "Airport_Airline": "DXB-FZ",
        "Quarter": "2025-Q3",
        "Quota": 100
    },
    {
        "Airport_Airline": "SZX-HU",
        "Quarter": "2025-Q3",
        "Quota": 150
    },
    {
        "Airport_Airline": "MAD-IB",
        "Quarter": "2025-Q3",
        "Quota": 150
    },
    {
        "Airport_Airline": "TLV-IZ",
        "Quarter": "2025-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "KWI-J9",
        "Quarter": "2025-Q3",
        "Quota": 100
    },
    {
        "Airport_Airline": "BEG-JU",
        "Quarter": "2025-Q3",
        "Quota": 100
    },
    {
        "Airport_Airline": "ICN-KE",
        "Quarter": "2025-Q3",
        "Quota": 150
    },
    {
        "Airport_Airline": "AMS-KL",
        "Quarter": "2025-Q3",
        "Quota": 150
    },
    {
        "Airport_Airline": "LUX-LG",
        "Quarter": "2025-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "FRA-LH",
        "Quarter": "2025-Q3",
        "Quota": 150
    },
    {
        "Airport_Airline": "MUC-LH",
        "Quarter": "2025-Q3",
        "Quota": 150
    },
    {
        "Airport_Airline": "WAW-LO",
        "Quarter": "2025-Q3",
        "Quota": 150
    },
    {
        "Airport_Airline": "BHX-LS",
        "Quarter": "2025-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "LBA-LS",
        "Quarter": "2025-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "MAN-LS",
        "Quarter": "2025-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "ZRH-LX",
        "Quarter": "2025-Q3",
        "Quota": 100
    },
    {
        "Airport_Airline": "TLV-LY",
        "Quarter": "2025-Q3",
        "Quota": 100
    },
    {
        "Airport_Airline": "CAI-MS",
        "Quarter": "2025-Q3",
        "Quota": 100
    },
    {
        "Airport_Airline": "VIE-OS",
        "Quarter": "2025-Q3",
        "Quota": 150
    },
    {
        "Airport_Airline": "SAW-PC",
        "Quarter": "2025-Q3",
        "Quota": 100
    },
    {
        "Airport_Airline": "DOH-QR",
        "Quarter": "2025-Q3",
        "Quota": 150
    },
    {
        "Airport_Airline": "OTP-RO",
        "Quarter": "2025-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "CPH-SK",
        "Quarter": "2025-Q3",
        "Quota": 150
    },
    {
        "Airport_Airline": "BRU-SN",
        "Quarter": "2025-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "IST-TK",
        "Quarter": "2025-Q3",
        "Quota": 150
    },
    {
        "Airport_Airline": "SAW-VF",
        "Quarter": "2025-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "MXP-W6",
        "Quarter": "2025-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "NAP-W4",
        "Quarter": "2025-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "RMO-W6",
        "Quarter": "2025-Q3",
        "Quota": 5
    },
    {
        "Airport_Airline": "VCE-W6",
        "Quarter": "2025-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "AGP-W6",
        "Quarter": "2025-Q3",
        "Quota": 23
    },
    {
        "Airport_Airline": "AHO-W6",
        "Quarter": "2025-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "ALC-W6",
        "Quarter": "2025-Q3",
        "Quota": 30
    },
    {
        "Airport_Airline": "AMM-W6",
        "Quarter": "2025-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "ARN-W6",
        "Quarter": "2025-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "ATH-W6",
        "Quarter": "2025-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "AUH-W6",
        "Quarter": "2025-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "AYT-W6",
        "Quarter": "2025-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "BBU-W6",
        "Quarter": "2025-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "BCN-W6",
        "Quarter": "2025-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "BER-W6",
        "Quarter": "2025-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "BHX-W6",
        "Quarter": "2025-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "BIO-W6",
        "Quarter": "2025-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "BOJ-W6",
        "Quarter": "2025-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "BRI-W6",
        "Quarter": "2025-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "BSL-W6",
        "Quarter": "2025-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "CFU-W6",
        "Quarter": "2025-Q3",
        "Quota": 20
    },
    {
        "Airport_Airline": "CPH-W6",
        "Quarter": "2025-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "CRL-W6",
        "Quarter": "2025-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "CTA-W6",
        "Quarter": "2025-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "DTM-W6",
        "Quarter": "2025-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "DXB-W6",
        "Quarter": "2025-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "EIN-W6",
        "Quarter": "2025-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "EVN-W6",
        "Quarter": "2025-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "FCO-W6",
        "Quarter": "2025-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "FMM-W6",
        "Quarter": "2025-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "FNC-W6",
        "Quarter": "2025-Q3",
        "Quota": 8
    },
    {
        "Airport_Airline": "GDN-W6",
        "Quarter": "2025-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "GHV-W6",
        "Quarter": "2025-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "GLA-W6",
        "Quarter": "2025-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "GOA-W6",
        "Quarter": "2025-Q3",
        "Quota": 100
    },
    {
        "Airport_Airline": "GRO-W6",
        "Quarter": "2025-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "GYD-W6",
        "Quarter": "2025-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "HER-W6",
        "Quarter": "2025-Q3",
        "Quota": 16
    },
    {
        "Airport_Airline": "HRG-W6",
        "Quarter": "2025-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "IST-W6",
        "Quarter": "2025-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "JED-W6",
        "Quarter": "2025-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "JTR-W6",
        "Quarter": "2025-Q3",
        "Quota": 10
    },
    {
        "Airport_Airline": "KEF-W6",
        "Quarter": "2025-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "KUT-W6",
        "Quarter": "2025-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "LCA-W6",
        "Quarter": "2025-Q3",
        "Quota": 35
    },
    {
        "Airport_Airline": "LGW-W6",
        "Quarter": "2025-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "LIS-W6",
        "Quarter": "2025-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "LPA-W6",
        "Quarter": "2025-Q3",
        "Quota": 18
    },
    {
        "Airport_Airline": "LPL-W6",
        "Quarter": "2025-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "LTN-W6",
        "Quarter": "2025-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "MAD-W6",
        "Quarter": "2025-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "MLA-W6",
        "Quarter": "2025-Q3",
        "Quota": 22
    },
    {
        "Airport_Airline": "MXP-W4",
        "Quarter": "2025-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "NCE-W6",
        "Quarter": "2025-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "ORY-W6",
        "Quarter": "2025-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "PMI-W6",
        "Quarter": "2025-Q3",
        "Quota": 18
    },
    {
        "Airport_Airline": "RAK-W6",
        "Quarter": "2025-Q3",
        "Quota": 100
    },
    {
        "Airport_Airline": "RHO-W6",
        "Quarter": "2025-Q3",
        "Quota": 12
    },
    {
        "Airport_Airline": "RMO-W6",
        "Quarter": "2025-Q3",
        "Quota": 5
    },
    {
        "Airport_Airline": "SKG-W6",
        "Quarter": "2025-Q3",
        "Quota": 12
    },
    {
        "Airport_Airline": "SPX-W6",
        "Quarter": "2025-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "STR-W6",
        "Quarter": "2025-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "TFS-W6",
        "Quarter": "2025-Q3",
        "Quota": 37
    },
    {
        "Airport_Airline": "TGD-W6",
        "Quarter": "2025-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "TGM-W6",
        "Quarter": "2025-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "TIA-W6",
        "Quarter": "2025-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "TLV-W6",
        "Quarter": "2025-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "VLC-W6",
        "Quarter": "2025-Q3",
        "Quota": 12
    },
    {
        "Airport_Airline": "VNO-W6",
        "Quarter": "2025-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "WAW-W6",
        "Quarter": "2025-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "WRO-W6",
        "Quarter": "2025-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "ZTH-W6",
        "Quarter": "2025-Q3",
        "Quota": 19
    },
    {
        "Airport_Airline": "ADB-XQ",
        "Quarter": "2025-Q3",
        "Quota": 50
    },
    {
        "Airport_Airline": "AYT-XQ",
        "Quarter": "2025-Q3",
        "Quota": 50
    }
        
]
            
     
    `;
