import json

found = False
with open(r"C:\Users\HP\.gemini\antigravity\brain\5a77d23d-f3b3-440c-8ba0-3200453c0dc8\.system_generated\logs\transcript_full.jsonl", "r", encoding="utf-8") as f:
    for line in f:
        try:
            obj = json.loads(line)
            if obj.get("type") == "USER_INPUT" and "viewBox=\"0 0 1500 1499.999933\"" in obj.get("content", ""):
                print("Found matching message!")
                idx = obj["content"].find("<svg")
                if idx != -1:
                    svg_code = obj["content"][idx:]
                    with open(r"D:\Positive\app\public\logo.svg", "w", encoding="utf-8") as out:
                        out.write(svg_code)
                    print(f"SVG extracted! Length: {len(svg_code)}. Ends with </svg>? {svg_code.strip().endswith('</svg>')}")
                    found = True
        except Exception as e:
            pass
if not found:
    print("Not found.")
