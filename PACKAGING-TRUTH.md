# Velour — Packaging truth

Built from 26 product images supplied 13 Oct 2026 (`assets/products/`). Per the order of authority, packaging truth overrides this design system: never redraw, re-letter or recolour packaging. Composite real product photography in layouts.

## Source reliability
- **Real photographs and print artwork** (highest authority): `lid-cream-gold-foil-REAL.jpg`, `lid-with-ribbon-REAL.jpg`, `florentine-label-artwork-REAL.jpg` (flat wrap artwork).
- **Styled / AI-assisted scenes** (all other files): good for product identity, structure and colour. Small lettering is often garbled (e.g. "Luxury Druk Chocolates", "Low Of Indes", bar back-panel copy), so never copy lettering or claims from them. Take lettering only from real photos or print dielines.

## Range (trending, Oct 2026)
- **Dark bars.** Matte black carton, "Velour" gold-foil script at top, one illustrated animal centre, percentage set large at the bottom over a hairline rule, vertical side text. *Noir 85%*: scarlet macaw on a cacao branch. *Sugar Free 90%*: lion portrait, "SUGAR FREE" under the logo. Bar moulds carry "Velour" embossed in every segment.
- **London Almond Chocolate Cookies.** Square tin, brushed gold lid, cream wrap with blue toile of London (Buckingham Palace, Big Ben, Thames). Chocolate-brown label with rounded corners and a gold keyline; "Velour" script, "Luxury Dark Chocolates", product name in gold serif.
- **Almond Cranberry Florentine.** Same square tin and label system. Wrap artwork (`florentine-label-artwork-REAL.jpg`): cream ground with a faint interlocking-circle pattern, sepia safari toile along the bottom (acacia trees, giraffes, zebra, stag), butterflies and cacao pods above. Label: cocoa-brown, square top and rounded bottom corners, pale peach border. Lettering, verbatim: "Velour" script · "Luxury Dark Chocolates" · "Almond Cranberry" (ivory serif) · "Florentine" (large gold serif italic) · "Protein rich cookies" · "• Fiber Rich • Low Fat • Vegan" · small round mark. In photographs the wrap appears both cream (`florentine-tin-cream.png`) and metallic gold (`florentine-post-bigger-tin.png`, `florentine-story-cloche.jpg`); likely the same artwork printed on metallic stock. Confirm which is current. A larger tin size exists ("Bigger tin" post).
- **Nama — Japanese Chocolate Fudge** (200 g). Shallow rounded gold tin, black and gold label with cherry blossom, Mt Fuji and wave motifs; gold serif caps "NAMA". Inside: cocoa-dusted slab with a glossy embossed Velour chocolate seal.
- **Stuffed Medjool dates.** Six toppings: chocolate-filled, pistachio, cranberry, candied fruit with gold leaf, almond-hazelnut, rose petal. Sold in 6 (gold tray) and 12 (black tray).
- **Florentine cookies.** Cranberry-nut florentine topped with a chocolate disc embossed with a square "Velour" plaque and a cacao-flower mark.
- **Truffles.** 12 in a gold tray.
- **Gift boxes.** Cream lid-and-base or sleeve box; combinations of 6 dates + 6 florentines, or 6 dates + 2 sachets.
- **Wooden assortment box.** Pale wood, hinged glass lid with "Velour" script in black, brass clasps, gold-lined tray of ~36 pieces.

## Materials
- **Cream gift lid.** Warm cream board, gold-foil line art: gothic arched window, round arched window with curtain and cacao pods, three-tier fountain, hornbill, sunbird on a cacao branch, magnolia and leaf sprigs. "Velour" foil script centred. Side band reads "Luxury Bean To Bar Dark Chocolate".
- **Ribbon.** Brown grosgrain (ribbed, not satin), gold "Velour – Luxury Dark Chocolates" with a small cacao-bee mark, repeating.
- **Sachets.** Dusty mauve-rose matte film, silver crimped top seal, sepia cacao line drawing with repeating "Velour" script.
- **Trays.** Gold foil for 6-piece and truffle boxes; matte black for 12-date boxes.
- **Embossed seal.** Square plaque, "Velour" script, cacao-flower mark lower right. Used on florentines and Nama.

## Product colours (sampled from photos; confirmed true by Velour, 13 Oct 2026)
| Surface | Approx. hex | Nearest token |
|---|---|---|
| Gift lid cream (real photo) | `#F6E1CD` | `--velour-ink` #F3E8D6 |
| Lid foil line art (real photo) | `#CF8F4E` | warmer, more copper than `--velour-gold` #C89F5B |
| Ribbon brown (real photo) | `#7A4E2E` | — |
| Bar carton | `#181614` | `--velour-ground` #15100C |
| Tin label brown | `#3E2016` | — |
| Sachet mauve-rose | `#9A6052` | — |

Tokens: `--pack-*` in `tokens/colors.css`. Use for print, photo matching and packaging-led layouts; dark-register layouts still follow Ground / Ink / Gold.

## Claims
All claims printed on packaging are accurate and cleared (confirmed by Velour, 13 Oct 2026), including London Almond "PCOS & Thyroid Friendly · Low GI Index · Hormonal Balancing" and Florentine "Protein rich cookies · Fiber Rich · Low Fat · Vegan". Use each claim only with the product that carries it.

## Notes
1. **Nama contains cream** ("Hokkaido cream & dark cocoa"), so it is not vegan and sits outside "dark only" messaging.
2. **Lettering** comes from real photos or artwork only; AI-assisted scenes garble small type.
3. **Spelling on pack** is verbatim ("Fiber"); new copy uses British spelling ("fibre").
