# Third-party code, data and references

Colorblocking only reuses code under permissive licenses (MIT, BSD, Apache-2.0, ISC). Copyleft
projects are listed at the bottom for the record; none of their code is used.

## Dependencies

| Package | Used by | License | Source |
|---|---|---|---|
| `image` | image_io, harness | MIT | https://pub.dev/packages/image |
| `args` | harness | BSD-3-Clause | https://pub.dev/packages/args |
| `flutter_riverpod` | app (state) | MIT | https://pub.dev/packages/flutter_riverpod |
| `file_selector` | app (open/save dialogs) | BSD-3-Clause | https://pub.dev/packages/file_selector |
| `desktop_drop` | app (drag and drop) | Apache-2.0 | https://pub.dev/packages/desktop_drop |
| `path_provider` | app (cache directory) | BSD-3-Clause | https://pub.dev/packages/path_provider |
| `web` | blocking_engine, app (the browser: worker, images, storage, sharing) | BSD-3-Clause | https://pub.dev/packages/web |
| `test`, `lints`, `flutter_lints` | dev only | BSD-3-Clause | https://pub.dev/packages/test |
| Playwright | dev only (`tool/web_e2e`: drives the web build in browsers) | Apache-2.0 | https://github.com/microsoft/playwright |

## Shipped with the Windows build

| What | License | Source |
|---|---|---|
| Flutter engine (`flutter_windows.dll`) and the Dart runtime | BSD-3-Clause (Flutter's bundled notices list its own dependencies) | https://github.com/flutter/flutter |
| Visual C++ runtime DLLs (`msvcp140.dll`, `vcruntime140.dll`, ...) | Redistributable under the Visual Studio license (app-local deployment) | https://learn.microsoft.com/cpp/windows/redistributing-visual-cpp-files |
| Installer made with Inno Setup (build tool, not part of the app) | Inno Setup License: free, including commercial use; since 6.5 the author asks commercial users to buy a license, which the license itself doesn't require | https://jrsoftware.org/isinfo.php |

## Shipped with the web build

| What | License | Source |
|---|---|---|
| Flutter web engine, CanvasKit (Skia compiled to WebAssembly) and the Dart runtime, served from our own site | BSD-3-Clause | https://github.com/flutter/flutter, https://skia.org |
| Roboto font (Regular, Medium, Bold; the copy Flutter ships in its SDK) | Apache-2.0 (`assets/fonts/LICENSE-Roboto.txt`) | https://github.com/googlefonts/roboto |

The app icon is our own, drawn by `tool/harness/bin/icon.dart`. The app shows every bundled
license under About → View licenses, including this file.

## Algorithms, constants and test data

| What | Where used | License / status | Source |
|---|---|---|---|
| OKLab matrices and XYZ→OKLab test vectors (Björn Ottosson) | `color_core/color` | Public domain (also offered as MIT) | https://bottosson.github.io/posts/oklab/ |
| sRGB→XYZ matrix and CIELAB constants (Bruce Lindbloom) | `color_core/color` | Published reference values | http://www.brucelindbloom.com/ |
| CIEDE2000 formula and 34-pair test data (Sharma, Wu, Dalal 2005) | `color_core/color`, tests | Published paper data | https://hajim.rochester.edu/ece/sites/gsharma/ciede2000/ |
| CSS Color 4 OKLab sample values | tests | W3C spec values (values only, no code copied) | https://www.w3.org/TR/css-color-4/ |
| SLIC superpixels (Achanta et al., TPAMI 2012) | `color_core/blocking` | Implemented from the paper; EPFL's original code is not used | https://doi.org/10.1109/TPAMI.2012.120 |
| Kuwahara filtering, generalized weighting (Kuwahara 1976; Papari et al. 2007) | `color_core/image` | Implemented from the papers | https://doi.org/10.1109/TIP.2007.904463 |
| Otsu's threshold (Otsu 1979) | `color_core/blocking` | Implemented from the paper | https://doi.org/10.1109/TSMC.1979.4310076 |
| Ward's minimum-variance merging (Ward 1963) on a region adjacency graph | `color_core/blocking` | Implemented from the paper | https://doi.org/10.1080/01621459.1963.10500845 |
| Douglas–Peucker line simplification (1973) | `color_core/blocking` | Implemented from the paper | https://doi.org/10.3138/FM57-6770-U75U-7727 |
| Chaikin corner cutting (1974) | `color_core/blocking` | Implemented from the paper | https://doi.org/10.1016/0146-664X(74)90028-8 |
| Bowyer–Watson Delaunay triangulation | `color_core/blocking` | Implemented from the papers | https://doi.org/10.1093/comjnl/24.2.162 |
| Smoothed structure tensor / edge-tangent flow, as used for anisotropic Kuwahara filtering (Kyprianidis, Kang, Döllner 2009) | `color_core/image/flow.dart` | Implemented from the paper; the authors' GPL code is not used | https://doi.org/10.1111/j.1467-8659.2009.01574.x |
| Line integral convolution (Cabral & Leedom 1993) | `color_core/blocking/brush.dart` | Implemented from the paper | https://doi.org/10.1145/166117.166151 |
| FastLIC: streamlines reused for every pixel along them (Stalling & Hege 1995) | `color_core/blocking/brush.dart` | Implemented from the paper | https://doi.org/10.1145/218380.218448 |
| Optimal 1-D grouping for value groups (Fisher 1958; as in Jenks' natural breaks) | `color_core/views` | Implemented from the paper | https://doi.org/10.1080/01621459.1958.10501479 |
| Threshold dynamics for multiple regions (Merriman, Bence & Osher 1992; multiple junctions 1994): Gaussian-weighted majority vote of labels | `color_core/blocking/shapes.dart` | Implemented from the papers | https://doi.org/10.1006/jcph.1994.1087 |

## Ideas borrowed (no code copied)

| Project | Idea | License |
|---|---|---|
| VTracer (visioncortex) | seam-free "cutout" tessellation with shared boundaries; speckle filtering | MIT — https://github.com/visioncortex/vtracer |
| paintbynumbersgenerator (drake7707) | k-means → facets → small-facet cleanup → border segments with fixed endpoints shared by neighbours | MIT — https://github.com/drake7707/paintbynumbersgenerator |
| scikit-image | SLIC connectivity enforcement, hierarchical RAG merging | BSD-3-Clause — https://github.com/scikit-image/scikit-image |
| triangler / esimov/triangle | edge-weighted point sampling for Delaunay facets | MIT — https://github.com/tdh8316/triangler, https://github.com/esimov/triangle |

## Copyleft or unlicensed: not used

Felzenszwalb–Huttenlocher original C++ (GPL-2.0+), Kyprianidis gpuakf/polyakf anisotropic Kuwahara
(GPL-3.0), Potrace (GPL-2.0), GIMP and Krita filters (GPL-3.0), G'MIC (CeCILL-2.1), mapshaper
(MPL-2.0), EPFL SLIC reference code (no license stated).
