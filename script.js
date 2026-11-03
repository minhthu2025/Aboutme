"use strict";

/* ==========================================
   01. CONFIGURATION
========================================== */

// Kiểm tra người dùng có muốn giảm chuyển động không.
const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
);

// Thời gian animation.
const ANIMATION_DURATION = reducedMotion.matches ? 0 : 800;

// Hàm chọn phần tử.
const $ = (selector) => document.querySelector(selector);

// Hàm chọn nhiều phần tử.
const $$ = (selector) => document.querySelectorAll(selector);



/* ==========================================
   02. PROJECT DATA
========================================== */

/*
    CHỈNH SỬA THÔNG TIN DỰ ÁN TẠI ĐÂY.

    github:
        Thay bằng link GitHub thật.

    demo:
        Thay bằng link website đã deploy.

    Nếu chưa có link, giữ giá trị "#".
*/

const projects = {
    "1": {
        "number": "PROJECT 001",
        "title": {
            "vi": "Dự đoán giá nhà bằng mạng nơ-ron",
            "en": "House Price Prediction with a Neural Network"
        },
        "description": {
            "vi": "Dự án xây dựng mô hình dự đoán giá nhà dựa trên diện tích, số phòng, vị trí và chất lượng xây dựng từ hơn 21.000 giao dịch nhà thực tế tại Mỹ.",
            "en": "A model for predicting house prices using area, room counts, location and construction quality, based on over 21,000 real US housing transactions."
        },
        "contribution": {
            "vi": "Mình phụ trách chuẩn bị dữ liệu: xử lý dữ liệu thiếu và giá trị bất thường; tạo các đặc trưng như tuổi nhà, khoảng cách đến trung tâm, tình trạng cải tạo; sau đó chuẩn hóa dữ liệu trước khi đưa vào mô hình. Mình cũng tự xây dựng mô hình Linear Regression từ đầu để làm baseline so sánh.",
            "en": "I prepared the data by handling missing values and outliers, engineering features such as house age, distance to the city centre and renovation status, and scaling the inputs before modelling. I also implemented Linear Regression from scratch as a comparison baseline."
        },
        "technologies": [
            "Python 3.9",
            "scikit-learn",
            "XGBoost",
            "LightGBM",
            "Optuna",
            "Pandas",
            "Seaborn"
        ],
        "github": "https://github.com/namph1377-sketch/Machine-Learning/tree/main/Practise%204",
        "demo": "#",
        "image": "images/duan1.png",
        "results": {
            "headers": {
                "vi": [
                    "Mô hình",
                    "R²",
                    "MAPE",
                    "MAE (USD)",
                    "RMSE (USD)"
                ],
                "en": [
                    "Model",
                    "R²",
                    "MAPE",
                    "MAE (USD)",
                    "RMSE (USD)"
                ]
            },
            "rows": {
                "vi": [
                    [
                        "MLP",
                        "0.8950",
                        "13.03%",
                        "≈ 71.097",
                        "≈ 126.590"
                    ],
                    [
                        "Linear Regression (baseline)",
                        "0.7701",
                        "18.86%",
                        "≈ 106.118",
                        "≈ 187.315"
                    ]
                ],
                "en": [
                    [
                        "MLP",
                        "0.8950",
                        "13.03%",
                        "≈ 71,097",
                        "≈ 126,590"
                    ],
                    [
                        "Linear Regression (baseline)",
                        "0.7701",
                        "18.86%",
                        "≈ 106,118",
                        "≈ 187,315"
                    ]
                ]
            },
            "notes": {
                "vi": [
                    "MLP giải thích khoảng 89,5% biến động giá nhà, cao hơn Linear Regression khoảng 12,5 điểm phần trăm.",
                    "MAE giảm khoảng 35.000 USD (~33%); sai số tương đối MAPE giảm khoảng 31% so với baseline.",
                    "Quá trình huấn luyện ổn định, Train Loss và Validation Loss có khoảng cách nhỏ; chưa thấy dấu hiệu overfitting rõ rệt trong thử nghiệm.",
                    "Linear Regression đơn giản, dễ giải thích và phù hợp làm baseline. MLP học được các tương tác phi tuyến giữa diện tích, vị trí, chất lượng xây dựng và tình trạng cải tạo, cho kết quả tốt hơn trong thử nghiệm này."
                ],
                "en": [
                    "MLP explains approximately 89.5% of house-price variation, about 12.5 percentage points more than Linear Regression.",
                    "MAE decreases by approximately USD 35,000 (~33%); relative error measured by MAPE decreases by approximately 31% compared with the baseline.",
                    "Training was stable, with a small gap between training and validation loss and no clear signs of overfitting in the experiment.",
                    "Linear Regression is a simple, interpretable baseline. MLP can learn nonlinear interactions between area, location, construction quality and renovation status, and performed better in this experiment."
                ]
            }
        }
    },
    "2": {
        "number": "PROJECT 002",
        "title": {
            "vi": "Thiết kế hệ thống quản lý thư viện",
            "en": "Library Management System Design"
        },
        "description": {
            "vi": "Dự án thiết kế hệ thống hỗ trợ hoạt động thư viện, gồm quản lý sách, độc giả, mượn–trả và tìm kiếm.",
            "en": "A system design project covering library operations, including book and reader management, loans, returns and search."
        },
        "contribution": {
            "vi": "Mình phân tích yêu cầu và quy trình nghiệp vụ; xây dựng Diagram 0, Sequence Diagram và Activity Diagram; mô tả chi tiết các chức năng. Sau khi nhóm xây dựng mô hình, mình kiểm thử thủ công và phản hồi để điều chỉnh hệ thống theo yêu cầu.",
            "en": "I analysed requirements and workflows, created Diagram 0, sequence and activity diagrams, and documented the functions. After the team built the model, I performed manual QA and provided feedback against the requirements."
        },
        "technologies": [
            "Python",
            "Supabase",
            "UML",
            "Diagram 0",
            "Sequence Diagram",
            "Activity Diagram",
            "Manual QA"
        ],
        "github": "https://github.com/hoanhh4977/library-management-system",
        "demo": "#",
        "image": "images/library.png"
    },
    "3": {
        "number": "PROJECT 003",
        "title": {
            "vi": "Phân nhóm khách hàng bằng K-Means",
            "en": "Customer Segmentation with K-Means"
        },
        "description": {
            "vi": "Dự án phân tích hơn 2.000 khách hàng dựa trên tuổi, thu nhập, thói quen chi tiêu và số con để hỗ trợ tìm hiểu từng nhóm khách và lựa chọn hướng tiếp thị.",
            "en": "An analysis of over 2,000 customers using age, income, spending patterns and number of children to understand customer groups and inform marketing approaches."
        },
        "contribution": {
            "vi": "Mình tự viết K-Means từ đầu, gồm khởi tạo tâm cụm và cập nhật các nhóm đến khi ổn định. Sau đó, mình thử nghiệm nhiều phương án và lựa chọn cách phân nhóm có ý nghĩa thực tế đối với bài toán kinh doanh.",
            "en": "I implemented K-Means from scratch, including centroid initialisation and iterative cluster updates until convergence. I then compared different approaches and selected a grouping with practical business relevance."
        },
        "technologies": [
            "Python",
            "scikit-learn",
            "K-Means",
            "DBSCAN",
            "PCA",
            "Tableau",
            "Pandas"
        ],
        "github": "https://github.com/namph1377-sketch/Machine-Learning/tree/main/Practise%203",
        "demo": "#",
        "image": "images/duan3.png",
        "results": {
            "headers": {
                "vi": [
                    "Số cụm (K)",
                    "Silhouette Score"
                ],
                "en": [
                    "Clusters (K)",
                    "Silhouette Score"
                ]
            },
            "rows": {
                "vi": [
                    [
                        "K = 2",
                        "0.2562"
                    ],
                    [
                        "K = 4",
                        "0.1706"
                    ]
                ],
                "en": [
                    [
                        "K = 2",
                        "0.2562"
                    ],
                    [
                        "K = 4",
                        "0.1706"
                    ]
                ]
            },
            "notes": {
                "vi": [
                    "K = 2 có Silhouette Score cao nhất, phân biệt hai nhóm đối lập: thu nhập cao – chi tiêu nhiều và gia đình tiết kiệm. Tuy nhiên, cách chia này còn tổng quát.",
                    "K = 4 có Silhouette Score thấp hơn nhưng tạo ra các phân khúc cụ thể hơn, nên được lựa chọn cho mục đích ứng dụng kinh doanh.",
                    "Middle-Income Deal Hunters: nhóm thu nhập trung bình, thích săn ưu đãi.",
                    "Extreme Savers: nhóm tiết kiệm rất nhiều.",
                    "Traditional Wealthy / Fresh Food Enthusiasts: nhóm khá giả truyền thống / yêu thích thực phẩm tươi.",
                    "VIP Customers: khách hàng VIP, phản hồi tốt với quảng cáo."
                ],
                "en": [
                    "K = 2 has the highest Silhouette Score, separating high-income, high-spending customers from saving-oriented families. However, this grouping is broad.",
                    "K = 4 has a lower Silhouette Score but produces more specific segments, making it the preferred option for the business application.",
                    "Middle-Income Deal Hunters: middle-income customers who seek promotions.",
                    "Extreme Savers: highly saving-oriented customers.",
                    "Traditional Wealthy / Fresh Food Enthusiasts: traditionally affluent customers / fresh-food enthusiasts.",
                    "VIP Customers: VIP customers who respond well to advertising."
                ]
            }
        }
    }
};


/* ==========================================
   02.1. VI / EN TRANSLATIONS
========================================== */

const translations = {
    vi: {
        "study-photo-open": "Phóng to ảnh học tập",
        "study-photo-close": "Đóng ảnh",
        "mos-view-document": "Xem chứng chỉ (PDF) ↗",
        "modal-results": "KẾT QUẢ & NHẬN XÉT",
        "project-image-3": "Biểu đồ phân nhóm khách hàng bằng K-Means",
        "project-category-3": "PHÂN TÍCH DỮ LIỆU",
        "project-title-3": "Phân nhóm khách hàng bằng K-Means",
        "project-image-2": "Hình ảnh dự án quản lý thư viện",
        "project-category-2": "PHÂN TÍCH & THIẾT KẾ HỆ THỐNG",
        "project-title-2": "Thiết kế hệ thống quản lý thư viện",
        "project-image-1": "Biểu đồ khoảng cách đến trung tâm và giá nhà",
        "project-category-1": "HỌC MÁY",
        "project-title-1": "Dự đoán giá nhà bằng mạng nơ-ron",
        "modal-contribution": "ĐÓNG GÓP CỦA MÌNH",
        "study-2027-status": "CHƯA BẮT ĐẦU",
        "study-2027-description": "Mình chưa bắt đầu năm tư. Phần này sẽ được cập nhật khi mình học đến năm 2027.",
        "study-2027-title": "Năm học phía trước",
        "study-2027-placeholder": "Năm tư · Chưa bắt đầu",
        "study-2027-alt": "Ảnh học tập năm 2027",
        "study-2027-year": "NĂM TƯ",
        "education-cohort": "NIÊN KHÓA 2024–2027",
        "portrait-3-alt": "Ảnh cá nhân 3 của Nguyễn Ngọc Minh Thư",
        "portrait-3-placeholder": "Ảnh cá nhân 3",
        "portrait-select-3": "Xem ảnh 3",
        "portrait-2-alt": "Ảnh cá nhân 2 của Nguyễn Ngọc Minh Thư",
        "portrait-2-placeholder": "Ảnh cá nhân 2",
        "portrait-select-2": "Xem ảnh 2",
        "portrait-1-placeholder": "Ảnh cá nhân 1",
        "portrait-select-1": "Xem ảnh 1",
        "portrait-next": "Ảnh tiếp theo",
        "portrait-prev": "Ảnh trước",
        "portrait-gallery": "Ảnh cá nhân",
        "screen-color-label": "Đổi màu giao diện",
        "screen-intro-lead": "MÌNH LÀ",
        "ielts-description": "Mình đang tham gia khóa học tiếng Anh với mục tiêu IELTS 6.5, tập trung vào khả năng đọc tài liệu và giao tiếp trong học tập, công việc.",
        "ielts-title": "Cải thiện tiếng Anh",
        "ielts-status": "ĐANG HỌC · CHƯA CÓ CHỨNG CHỈ",
        "ielts-target": "ĐIỂM MỤC TIÊU",
        "mos-description": "Hoàn thành ba chứng chỉ Word, Excel và PowerPoint năm 2024.",
        "certificates-title": "CHỨNG CHỈ.",
        "mos-powerpoint-placeholder": "Ảnh chứng chỉ PowerPoint",
        "mos-powerpoint-alt": "Chứng chỉ MOS PowerPoint",
        "mos-excel-placeholder": "Ảnh chứng chỉ Excel",
        "mos-excel-alt": "Chứng chỉ MOS Excel",
        "certificate-complete": "ĐÃ HOÀN THÀNH",
        "mos-word-placeholder": "Ảnh chứng chỉ Word",
        "mos-word-alt": "Chứng chỉ MOS Word",
        "certificates-subtitle": "Các chứng chỉ mình đã hoàn thành và mục tiêu tiếng Anh đang theo đuổi.",
        "certificates-kicker": "CHỨNG CHỈ",
        "personal-practical-text": "Quan sát kết quả và thử nhiều cách giải quyết khi làm bài tập.",
        "personal-practical-title": "Học qua thực hành",
        "personal-team-text": "Trao đổi bài và phối hợp cùng bạn bè trong các bài tập nhóm.",
        "personal-team-title": "Làm việc nhóm",
        "personal-adapt-text": "Làm quen với lập trình và cách học mới khi vào đại học.",
        "personal-adapt-title": "Thích nghi",
        "skill-level-practice": "Đang thực hành",
        "skill-level-introduced": "Đã tiếp cận",
        "skill-level-basic": "Kiến thức cơ bản",
        "skill-level-learning": "Đang học",
        "skill-level-using": "Đang sử dụng",
        "goal-university": "Hoàn thành các môn học và chương trình đại học tại UTH.",
        "goal-practice": "Làm thêm website nhỏ để thực hành và chuẩn bị cho cơ hội thực tập.",
        "goal-frontend": "Củng cố HTML, CSS, JavaScript và tìm hiểu thêm về Frontend.",
        "goal-english": "Học tiếng Anh với mục tiêu IELTS 6.5.",
        "goals-title": "Mục tiêu hiện tại",
        "study-2026-status": "ĐANG HỌC",
        "study-2026-description": "Mình nhận ra mình thích thiết kế và xây dựng giao diện web. Hiện mình đang thực hành HTML, CSS, JavaScript, tiếp tục học tại UTH và học thêm tiếng Anh.",
        "study-2026-title": "Tìm hiểu hướng đi phù hợp",
        "study-2026-placeholder": "Ảnh năm ba",
        "study-2026-year": "NĂM BA",
        "study-2026-alt": "Ảnh học tập năm 2026",
        "study-2025-classification": "Xếp loại: Xuất sắc",
        "study-2025-description": "Mình chủ động hơn trong việc sắp xếp thời gian và hoàn thành bài tập. Có nhóm bạn cùng trao đổi, hỗ trợ nhau khiến việc học thoải mái và bớt áp lực hơn.",
        "study-2025-title": "Học tập ổn định hơn",
        "study-2025-placeholder": "Ảnh năm hai",
        "study-2025-year": "NĂM HAI",
        "study-2025-alt": "Ảnh học tập năm 2025",
        "study-2024-classification": "Xếp loại: Xuất sắc",
        "study-2024-description": "Bắt đầu học lập trình và làm quen với cách tự học ở đại học. Dù còn bỡ ngỡ, mình dần tìm được cách học phù hợp và duy trì kết quả ổn định.",
        "study-2024-title": "Làm quen với đại học",
        "study-2024-placeholder": "Ảnh năm nhất",
        "study-2024-year": "NĂM NHẤT",
        "study-2024-alt": "Ảnh học tập năm 2024",
        "education-subtitle": "Quá trình học cách thích nghi, tự học và tìm hiểu điều mình muốn theo đuổi.",
        "education-title2": "HỌC TẬP.",
        "education-title1": "HÀNH TRÌNH",
        "education-kicker": "HÀNH TRÌNH HỌC TẬP.",
        "scratch-cat-description": "Sushi là một em mèo hướng nội, thông minh, nhanh nhẹn; thích ăn hạt và bắt thằn lằn, rắn mối, chuột… Quậy nhưng siêu đáng yêu.",
        "scratch-artist-description": "Mình hay nghe nhạc khi học bài, làm việc hoặc muốn thư giãn.",
        "scratch-movie-description": "Mình thích xem phim để thư giãn, và thường để ý đến màu sắc, góc quay của từng bộ phim.",
        "about-year": "SINH VIÊN NĂM 3",
        "about-year-label": "NĂM HỌC",
        "about-paragraph3": "Hiện mình đang củng cố nền tảng HTML, CSS và JavaScript, đồng thời thực hành qua những bài tập và website nhỏ.",
        "nav-certificates": "CHỨNG CHỈ",
        "nav-education": "HỌC TẬP",
        "intro-label": "CHÀO MỪNG ĐẾN RẠP PHIM CÁ NHÂN",
        "intro-tagline": "MỌI CÂU CHUYỆN ĐỀU CÓ KHỞI ĐẦU.",
        "intro-enter": "VÀO RẠP PHIM",
        "brand-home": "Personal Cinema - Trang chủ",
        "navigation-label": "Điều hướng chính",
        "language-label": "Chọn ngôn ngữ",
        "language-vi": "Tiếng Việt",
        "language-en": "Tiếng Anh",
        "menu-open": "Mở menu",
        "header-status": "ĐANG MỞ CỬA",
        "nav-about": "GIỚI THIỆU",
        "nav-skills": "KỸ NĂNG",
        "nav-projects": "DỰ ÁN",
        "nav-contact": "LIÊN HỆ",
        "personal-name": "NGUYỄN NGỌC MINH THƯ",
        "header-brand": "PORTFOLIO",
        "hero-room": "PHÒNG CHIẾU 001",
        "hero-tagline": "TRẢI NGHIỆM PORTFOLIO CÁ NHÂN",
        "hero-feature": "SUẤT CHIẾU ĐẶC BIỆT",
        "screen-number": "MÀN HÌNH 01 / 06",
        "screen-overline": "XIN CHÀO,",
        "screen-line1": "Sinh viên năm 3 ngành Khoa học dữ liệu tại UTH.",
        "screen-line2": "Mình đang học và thực hành phát triển giao diện web.",
        "screen-status": "ĐANG KHỞI CHIẾU",
        "screen-tip": "RẤT VUI VÌ BẠN ĐÃ GHÉ THĂM",
        "screen-premiere": "CÔNG CHIẾU TRỰC TUYẾN",
        "hero-projects": "XEM DỰ ÁN",
        "hero-contact": "TÌM HIỂU VỀ MÌNH",
        "scroll-continue": "CUỘN ĐỂ TIẾP TỤC",
        "about-kicker": "GIỚI THIỆU",
        "about-title-line1": "MỘT CHÚT",
        "about-title-line2": "VỀ MÌNH.",
        "about-subtitle": "Ngành học, sở thích và những điều mình đang tìm hiểu.",
        "portrait-alt": "Ảnh chân dung Nguyễn Ngọc Minh Thư",
        "portrait-caption": "HÌNH 01 — NHÂN VẬT CHÍNH",
        "about-note": "VỀ MÌNH",
        "about-heading-line1": "MÌNH BẮT ĐẦU",
        "about-heading-line2": "NHƯ THẾ NÀO?",
        "about-paragraph1": "Trước khi vào đại học, mình gần như chưa có nền tảng lập trình. Thời gian đầu học Khoa học dữ liệu, mình cần khá nhiều thời gian để làm quen với kiến thức và cách học mới.",
        "about-paragraph2": "Trong quá trình học, mình nhận ra mình thích những công việc có kết quả trực quan: sắp xếp bố cục, lựa chọn màu sắc và làm cho các thành phần trên website hoạt động như mong muốn. Vì vậy, mình bắt đầu tìm hiểu Frontend.",
        "about-role-label": "NĂM SINH",
        "about-role": "2006",
        "about-major-label": "CHUYÊN NGÀNH",
        "about-major": "KHOA HỌC DỮ LIỆU",
        "about-university-label": "TRƯỜNG",
        "about-university": "UTH — ĐẠI HỌC GIAO THÔNG VẬN TẢI TP. HỒ CHÍ MINH",
        "about-focus-label": "QUÊ QUÁN",
        "about-focus": "CẦN THƠ",
        "scratch-eyebrow": "SỞ THÍCH",
        "scratch-title": "BA ĐIỀU MÌNH YÊU THÍCH.",
        "scratch-subtitle": "Bộ phim, nghệ sĩ mình thích và bé mèo Sushi.",
        "scratch-card-movie-label": "THẺ 01 / PHIM YÊU THÍCH",
        "scratch-card-movie-name": "Người tình ánh trăng",
        "scratch-card-artist-label": "THẺ 02 / NGHỆ SĨ YÊU THÍCH",
        "scratch-card-artist-name": "tlinh",
        "scratch-card-cat-label": "THẺ 03 / MÈO CỦA MÌNH",
        "scratch-card-cat-name": "Sushi",
        "scratch-alt-movie": "Poster phim Người tình ánh trăng",
        "scratch-alt-artist": "Nghệ sĩ tlinh",
        "scratch-alt-cat": "Mèo Sushi",
        "scratch-to-reveal": "CÀO ĐỂ KHÁM PHÁ",
        "scratch-to-reveal-desktop": "DI CHUỘT ĐỂ KHÁM PHÁ",
        "scratch-to-reveal-mobile": "VUỐT ĐỂ KHÁM PHÁ",
        "scratch-hidden": "VẪN ĐANG ĐƯỢC GIẤU",
        "scratch-revealed": "ĐÃ KHÁM PHÁ",
        "reveal": "MỞ THẺ",
        "scratch-again": "CÀO LẠI",
        "skills-kicker": "BỘ CÔNG CỤ",
        "skills-title-line1": "KỸ NĂNG &",
        "skills-title-line2": "CÔNG CỤ.",
        "skills-subtitle": "Những công nghệ mình đã tiếp cận và đang thực hành. Mình vẫn đang củng cố nền tảng, chưa xem bản thân là người thành thạo.",
        "skills-schedule": "KIẾN THỨC HIỆN TẠI",
        "skills-updated": "CẬP NHẬT 2026",
        "skills-categories": "3 NHÓM",
        "skills-now-showing": "ĐANG HỌC",
        "skills-in-development": "ĐANG PHÁT TRIỂN",
        "skills-daily": "CÔNG CỤ HẰNG NGÀY",
        "category-frontend": "GIAO DIỆN WEB",
        "category-programming": "LẬP TRÌNH & DỮ LIỆU",
        "category-tools": "CÔNG CỤ",
        "projects-kicker": "DỰ ÁN HỌC TẬP",
        "projects-title-line1": "CÁC DỰ ÁN",
        "projects-title-line2": "CỦA MÌNH.",
        "projects-subtitle": "Ba dự án học tập mình đã tham gia về học máy, phân tích dữ liệu và thiết kế hệ thống.",
        "projects-now-showing": "ĐANG TRÌNH CHIẾU",
        "projects-count": "03 DỰ ÁN",
        "project-view-1": "Xem chi tiết: Dự đoán giá nhà bằng mạng nơ-ron",
        "project-view-2": "Xem chi tiết: Thiết kế hệ thống quản lý thư viện",
        "project-view-3": "Xem chi tiết: Phân nhóm khách hàng bằng K-Means",
        "view-details": "XEM CHI TIẾT",
        "project-number-1": "DỰ ÁN 001",
        "project-number-2": "DỰ ÁN 002",
        "project-number-3": "DỰ ÁN 003",
        "project-description-1": "Dự đoán giá nhà từ hơn 21.000 giao dịch tại Mỹ. Mình phụ trách làm sạch dữ liệu, tạo đặc trưng và chuẩn hóa đầu vào.",
        "project-description-2": "Thiết kế hệ thống quản lý sách, độc giả và mượn–trả. Mình phụ trách phân tích yêu cầu, thiết kế UML và kiểm thử thủ công.",
        "project-description-3": "Phân nhóm hơn 2.000 khách hàng theo đặc điểm tương đồng. Mình tự xây dựng K-Means từ đầu và thử nghiệm các phương án phân nhóm.",
        "explore-project": "KHÁM PHÁ DỰ ÁN",
        "projects-footer": "CÒN NHIỀU CÂU CHUYỆN ĐANG ĐƯỢC THỰC HIỆN.",
        "projects-contact": "CÙNG TẠO NÊN ĐIỀU GÌ ĐÓ",
        "contact-kicker": "CẢNH CUỐI",
        "contact-overline": "GIỮ LIÊN LẠC NHÉ",
        "contact-title-line1": "RẤT VUI",
        "contact-title-line2": "ĐƯỢC KẾT NỐI.",
        "contact-description": "Cảm ơn bạn đã ghé thăm. Nếu muốn trao đổi về học tập, công nghệ, dự án hoặc đơn giản là làm quen, bạn có thể liên hệ với mình qua các kênh bên dưới.",
        "printer-label": "Máy in vé kết nối",
        "printer-ready": "SẴN SÀNG IN VÉ",
        "printer-prompt": "Tấm vé kết nối của bạn đang chờ.",
        "printer-printing": "ĐANG IN...",
        "printer-wait": "Vui lòng đợi vé được in xong.",
        "printer-ticket-ready": "VÉ ĐÃ SẴN SÀNG",
        "printer-tap-ticket": "Nhấn vào vé trong khay để mở.",
        "ticket-open": "Mở vé để xem thông tin liên hệ",
        "ticket-tap": "CHẠM ĐỂ MỞ",
        "print-ticket": "IN VÉ",
        "printer-instruction": "NHẤN NÚT ĐỂ IN VÉ KẾT NỐI",
        "ticket-close": "Đóng vé",
        "ticket-admit": "VÉ KẾT NỐI",
        "ticket-title": "KẾT NỐI NHÉ.",
        "ticket-name-label": "HỌ TÊN",
        "ticket-status": "SẴN SÀNG KẾT NỐI",
        "ticket-screen": "MÀN HÌNH",
        "ticket-screen-value": "LIÊN HỆ",
        "ticket-seat": "GHẾ",
        "ticket-state": "TRẠNG THÁI",
        "ticket-close-action": "ĐÓNG VÉ",
        "print-again": "IN LẠI",
        "contact-email": "EMAIL",
        "contact-github": "GITHUB",
        "contact-facebook": "FACEBOOK",
        "contact-email-value": "thunguyen.141106@gmail.com",
        "contact-github-value": "github.com/minhthu2025",
        "contact-facebook-value": "Đang cập nhật",
        "cat-button": "Gặp Sushi, quản lý rạp",
        "cat-caption": "RẠP PHIM CÓ MỘT CHÚ MÈO CƯ TRÚ.",
        "footer-brand": "RẠP PHIM CÁ NHÂN",
        "back-top": "LÊN ĐẦU TRANG",
        "footer-made": "ĐƯỢC TẠO NÊN BẰNG SỰ TÒ MÒ & CODE.",
        "footer-end": "HẾT PHIM.",
        "modal-heading": "CHI TIẾT DỰ ÁN",
        "modal-close": "Đóng chi tiết dự án",
        "modal-technologies": "CÔNG NGHỆ SỬ DỤNG",
        "modal-github": "GITHUB",
        "modal-demo": "BẢN DEMO",
        "sushi-eyebrow": "MỘT LỜI NHẮN TỪ CHỦ RẠP",
        "sushi-title": "BẠN ĐÃ GẶP QUẢN LÝ RẠP!",
        "sushi-note": "Cảm ơn bạn đã khám phá đến tận đây. Hy vọng chúng mình sẽ có cơ hội cùng tạo nên một câu chuyện thú vị!",
        "sushi-pet": "Vuốt ve em mèo",
        "sushi-close": "Đóng lời nhắn",
        "toast-email": "Email chưa được cập nhật.",
        "toast-github": "GitHub chưa được cập nhật.",
        "toast-facebook": "Facebook chưa được cập nhật.",
        "toast-link": "Liên kết này chưa được cập nhật.",
        "color-switch-blue": "Chuyển sang chế độ xanh dương",
        "color-switch-red": "Chuyển về chế độ đỏ",
        "color-switch-tooltip": "CHUYỂN MÀU RẠP PHIM",
        "menu-close": "Đóng menu",
        "project-github-link": "GitHub của dự án",
        "project-demo-link": "Bản demo trực tiếp của dự án",
        "project-github-placeholder": "GitHub của dự án - Chưa cập nhật",
        "project-demo-placeholder": "Bản demo trực tiếp của dự án - Chưa cập nhật"
    },
    en: {
        "study-photo-open": "Enlarge study photo",
        "study-photo-close": "Close photo",
        "mos-view-document": "View certificate (PDF) ↗",
        "modal-results": "RESULTS & OBSERVATIONS",
        "project-image-3": "K-Means customer segmentation chart",
        "project-category-3": "DATA ANALYSIS",
        "project-title-3": "Customer Segmentation with K-Means",
        "project-image-2": "Library management project image",
        "project-category-2": "SYSTEMS ANALYSIS & DESIGN",
        "project-title-2": "Library Management System Design",
        "project-image-1": "Chart of distance to the city centre and house prices",
        "project-category-1": "MACHINE LEARNING",
        "project-title-1": "House Price Prediction with a Neural Network",
        "modal-contribution": "MY CONTRIBUTION",
        "study-2027-status": "NOT STARTED",
        "study-2027-description": "I haven’t started my fourth year yet. I’ll update this section when I reach it in 2027.",
        "study-2027-title": "The year ahead",
        "study-2027-placeholder": "Year four · Not started",
        "study-2027-alt": "Study photo from 2027",
        "study-2027-year": "YEAR FOUR",
        "education-cohort": "ACADEMIC YEARS 2024–2027",
        "portrait-3-alt": "Personal photo 3 of Jane Nguyen",
        "portrait-3-placeholder": "Personal photo 3",
        "portrait-select-3": "View photo 3",
        "portrait-2-alt": "Personal photo 2 of Jane Nguyen",
        "portrait-2-placeholder": "Personal photo 2",
        "portrait-select-2": "View photo 2",
        "portrait-1-placeholder": "Personal photo 1",
        "portrait-select-1": "View photo 1",
        "portrait-next": "Next photo",
        "portrait-prev": "Previous photo",
        "portrait-gallery": "Personal photos",
        "screen-color-label": "Switch cinema colour",
        "screen-intro-lead": "I’M",
        "ielts-description": "I’m taking English classes with a target IELTS score of 6.5, focusing on reading and communication for study and work.",
        "ielts-title": "Improving my English",
        "ielts-status": "STUDYING · NOT YET CERTIFIED",
        "ielts-target": "TARGET SCORE",
        "mos-description": "Completed Word, Excel and PowerPoint certifications in 2024.",
        "certificates-title": "CERTIFICATES.",
        "mos-powerpoint-placeholder": "PowerPoint certificate image",
        "mos-powerpoint-alt": "MOS PowerPoint certificate",
        "mos-excel-placeholder": "Excel certificate image",
        "mos-excel-alt": "MOS Excel certificate",
        "certificate-complete": "COMPLETED",
        "mos-word-placeholder": "Word certificate image",
        "mos-word-alt": "MOS Word certificate",
        "certificates-subtitle": "Certifications I’ve completed and the English qualification I’m working toward.",
        "certificates-kicker": "CERTIFICATES",
        "personal-practical-text": "Observing results and trying different approaches in exercises.",
        "personal-practical-title": "Learning by doing",
        "personal-team-text": "Discussing coursework and collaborating on group assignments.",
        "personal-team-title": "Teamwork",
        "personal-adapt-text": "Adjusting to programming and a new way of studying at university.",
        "personal-adapt-title": "Adaptability",
        "skill-level-practice": "Practising",
        "skill-level-introduced": "Introduced to",
        "skill-level-basic": "Basic knowledge",
        "skill-level-learning": "Learning",
        "skill-level-using": "Using",
        "goal-university": "Complete my courses and degree at UTH.",
        "goal-practice": "Build small websites to practise and prepare for internship opportunities.",
        "goal-frontend": "Strengthen HTML, CSS and JavaScript and explore frontend development.",
        "goal-english": "Study English with a target IELTS score of 6.5.",
        "goals-title": "Current goals",
        "study-2026-status": "IN PROGRESS",
        "study-2026-description": "I realised I enjoy designing and building web interfaces. I’m practising HTML, CSS and JavaScript alongside my studies at UTH and English classes.",
        "study-2026-title": "Exploring my direction",
        "study-2026-placeholder": "Year 3 photo",
        "study-2026-year": "YEAR THREE",
        "study-2026-alt": "Study photo from 2026",
        "study-2025-classification": "Classification: Excellent",
        "study-2025-description": "I became more confident managing my time and completing assignments. Studying with friends and helping each other made learning less stressful.",
        "study-2025-title": "Finding my rhythm",
        "study-2025-placeholder": "Year 2 photo",
        "study-2025-year": "YEAR TWO",
        "study-2025-alt": "Study photo from 2025",
        "study-2024-classification": "Classification: Excellent",
        "study-2024-description": "I started learning programming and adjusting to independent study. Despite the unfamiliar subjects, I gradually found study methods that worked for me.",
        "study-2024-title": "Getting used to university",
        "study-2024-placeholder": "Year 1 photo",
        "study-2024-year": "YEAR ONE",
        "study-2024-alt": "Study photo from 2024",
        "education-subtitle": "Learning to adapt, study independently, and explore what I want to pursue.",
        "education-title2": "EDUCATION.",
        "education-title1": "MY",
        "education-kicker": "MY EDUCATION.",
        "scratch-cat-description": "Sushi is an introverted, clever and agile cat who loves kibble and catching lizards, skinks and mice… Mischievous, but absolutely adorable.",
        "scratch-artist-description": "I often listen to music while studying, working, or relaxing.",
        "scratch-movie-description": "I watch films to relax and often notice their colours and camera work.",
        "about-year": "THIRD-YEAR STUDENT",
        "about-year-label": "YEAR",
        "about-paragraph3": "I’m currently strengthening my HTML, CSS and JavaScript fundamentals through exercises and small websites.",
        "nav-certificates": "CERTIFICATES",
        "nav-education": "EDUCATION",
        "intro-label": "WELCOME TO MY PERSONAL CINEMA",
        "intro-tagline": "EVERY STORY HAS A BEGINNING.",
        "intro-enter": "ENTER THE CINEMA",
        "brand-home": "Personal Cinema - Home",
        "navigation-label": "Main navigation",
        "language-label": "Choose language",
        "language-vi": "Vietnamese",
        "language-en": "English",
        "menu-open": "Open menu",
        "header-status": "NOW OPEN",
        "nav-about": "ABOUT",
        "nav-skills": "SKILLS",
        "nav-projects": "PROJECTS",
        "nav-contact": "CONTACT",
        "personal-name": "Jane Nguyen",
        "header-brand": "PORTFOLIO",
        "hero-room": "SCREENING ROOM 001",
        "hero-tagline": "A PERSONAL PORTFOLIO EXPERIENCE",
        "hero-feature": "FEATURE PRESENTATION",
        "screen-number": "SCREEN 01 / 06",
        "screen-overline": "HELLO,",
        "screen-line1": "A third-year Data Science student at UTH.",
        "screen-line2": "I’m learning and practising frontend web development.",
        "screen-status": "NOW SHOWING",
        "screen-tip": "THANKS FOR STOPPING BY",
        "screen-premiere": "DIGITAL PREMIERE",
        "hero-projects": "VIEW PROJECTS",
        "hero-contact": "ABOUT ME",
        "scroll-continue": "SCROLL TO CONTINUE",
        "about-kicker": "INTRODUCTION",
        "about-title-line1": "A LITTLE",
        "about-title-line2": "ABOUT ME.",
        "about-subtitle": "What I study, what I enjoy, and what I’m learning.",
        "portrait-alt": "Portrait of Jane Nguyen",
        "portrait-caption": "FIG. 01 — THE MAIN CHARACTER",
        "about-note": "ABOUT ME",
        "about-heading-line1": "HOW I",
        "about-heading-line2": "GOT STARTED.",
        "about-paragraph1": "I had almost no programming experience before university. When I started studying Data Science, I needed time to get used to the subjects and a new way of learning.",
        "about-paragraph2": "While studying, I realised I enjoy work with visible results: arranging layouts, choosing colours, and making website elements work as intended. That led me to explore frontend development.",
        "about-role-label": "BORN",
        "about-role": "2006",
        "about-major-label": "MAJOR",
        "about-major": "DATA SCIENCE",
        "about-university-label": "UNIVERSITY",
        "about-university": "UTH — UNIVERSITY OF TRANSPORT HO CHI MINH CITY",
        "about-focus-label": "HOMETOWN",
        "about-focus": "CAN THO",
        "scratch-eyebrow": "INTERESTS",
        "scratch-title": "THREE THINGS I LOVE.",
        "scratch-subtitle": "A favorite movie, a favorite artist, and my cat Sushi.",
        "scratch-card-movie-label": "CARD 01 / FAVORITE MOVIE",
        "scratch-card-movie-name": "Moon lovers",
        "scratch-card-artist-label": "CARD 02 / FAVORITE ARTIST",
        "scratch-card-artist-name": "tlinh",
        "scratch-card-cat-label": "CARD 03 / MY CAT",
        "scratch-card-cat-name": "Sushi",
        "scratch-alt-movie": "Moon lovers poster",
        "scratch-alt-artist": "Artist tlinh",
        "scratch-alt-cat": "Sushi the cat",
        "scratch-to-reveal": "SCRATCH TO REVEAL",
        "scratch-to-reveal-desktop": "MOVE YOUR CURSOR TO REVEAL",
        "scratch-to-reveal-mobile": "SWIPE TO REVEAL",
        "scratch-hidden": "STILL UNDER WRAPS",
        "scratch-revealed": "DISCOVERED",
        "reveal": "REVEAL",
        "scratch-again": "SCRATCH AGAIN",
        "skills-kicker": "THE TOOLKIT",
        "skills-title-line1": "SKILLS &",
        "skills-title-line2": "TOOLS.",
        "skills-subtitle": "Technologies I’ve been introduced to and am practising. I’m still building my foundations rather than claiming proficiency.",
        "skills-schedule": "CURRENT KNOWLEDGE",
        "skills-updated": "UPDATED 2026",
        "skills-categories": "3 CATEGORIES",
        "skills-now-showing": "NOW SHOWING",
        "skills-in-development": "IN DEVELOPMENT",
        "skills-daily": "DAILY ESSENTIALS",
        "category-frontend": "FRONTEND",
        "category-programming": "PROGRAMMING & DATA",
        "category-tools": "TOOLS",
        "projects-kicker": "ACADEMIC PROJECTS",
        "projects-title-line1": "MY",
        "projects-title-line2": "PROJECTS.",
        "projects-subtitle": "Three academic projects I’ve contributed to in machine learning, data analysis and systems design.",
        "projects-now-showing": "NOW SHOWING",
        "projects-count": "03 TITLES AVAILABLE",
        "project-view-1": "View details: House Price Prediction with a Neural Network",
        "project-view-2": "View details: Library Management System Design",
        "project-view-3": "View details: Customer Segmentation with K-Means",
        "view-details": "VIEW DETAILS",
        "project-number-1": "PROJECT 001",
        "project-number-2": "PROJECT 002",
        "project-number-3": "PROJECT 003",
        "project-description-1": "Predicting house prices from over 21,000 US transactions. I handled data cleaning, feature engineering and input scaling.",
        "project-description-2": "Designing a system for books, readers and loans. I worked on requirements analysis, UML diagrams and manual testing.",
        "project-description-3": "Segmenting over 2,000 customers by shared characteristics. I implemented K-Means from scratch and tested different clustering approaches.",
        "explore-project": "EXPLORE PROJECT",
        "projects-footer": "MORE STORIES ARE CURRENTLY IN PRODUCTION.",
        "projects-contact": "LET'S CREATE SOMETHING",
        "contact-kicker": "THE FINAL SCENE",
        "contact-overline": "LET’S KEEP IN TOUCH",
        "contact-title-line1": "NICE TO",
        "contact-title-line2": "MEET YOU.",
        "contact-description": "Thanks for visiting. If you’d like to talk about studying, technology, projects, or simply say hello, feel free to reach out below.",
        "printer-label": "Connection ticket printer",
        "printer-ready": "READY TO PRINT",
        "printer-prompt": "Your connection ticket is waiting.",
        "printer-printing": "PRINTING...",
        "printer-wait": "Please wait while your ticket prints.",
        "printer-ticket-ready": "TICKET READY",
        "printer-tap-ticket": "Tap the ticket in the tray to open it.",
        "ticket-open": "Open the ticket to view contact information",
        "ticket-tap": "TAP TO REVEAL",
        "print-ticket": "PRINT TICKET",
        "printer-instruction": "PRESS THE BUTTON TO PRINT YOUR TICKET",
        "ticket-close": "Close ticket",
        "ticket-admit": "CONNECTION PASS",
        "ticket-title": "LET'S CONNECT.",
        "ticket-name-label": "NAME",
        "ticket-status": "OPEN FOR CONNECTION",
        "ticket-screen": "SCREEN",
        "ticket-screen-value": "CONTACT",
        "ticket-seat": "SEAT",
        "ticket-state": "STATUS",
        "ticket-close-action": "CLOSE TICKET",
        "print-again": "PRINT AGAIN",
        "contact-email": "EMAIL",
        "contact-github": "GITHUB",
        "contact-facebook": "FACEBOOK",
        "contact-email-value": "thunguyen.141106@gmail.com",
        "contact-github-value": "github.com/minhthu2025",
        "contact-facebook-value": "Coming soon",
        "cat-button": "Meet Sushi, the cinema manager",
        "cat-caption": "THE CINEMA HAS A RESIDENT CAT.",
        "footer-brand": "A PERSONAL SCREENING ROOM",
        "back-top": "BACK TO TOP",
        "footer-made": "MADE WITH CURIOSITY & CODE.",
        "footer-end": "THE END.",
        "modal-heading": "PROJECT DETAILS",
        "modal-close": "Close project details",
        "modal-technologies": "TECHNOLOGIES USED",
        "modal-github": "GITHUB",
        "modal-demo": "LIVE DEMO",
        "sushi-eyebrow": "A NOTE FROM THE CINEMA OWNER",
        "sushi-title": "MEET THE CINEMA MANAGER!",
        "sushi-note": "Thanks for exploring this far. I hope we get the chance to create an exciting story together!",
        "sushi-pet": "Pet the kitty",
        "sushi-close": "Close the note",
        "toast-email": "Email has not been added yet.",
        "toast-github": "GitHub has not been added yet.",
        "toast-facebook": "Facebook has not been added yet.",
        "toast-link": "This link has not been updated yet.",
        "color-switch-blue": "Switch to blue cinema mode",
        "color-switch-red": "Switch back to red cinema mode",
        "color-switch-tooltip": "SWITCH CINEMA COLOR",
        "menu-close": "Close menu",
        "project-github-link": "Project GitHub link",
        "project-demo-link": "Live project demo",
        "project-github-placeholder": "Project GitHub - Not yet added",
        "project-demo-placeholder": "Live project demo - Not yet added"
    }
};

let currentLanguage = "vi";

function getTranslation(key) {
    return translations[currentLanguage][key] || translations.en[key] || key;
}

function setNodeText(element, value) {
    const textNode = Array.from(element.childNodes).find(
        (node) => node.nodeType === Node.TEXT_NODE
    );

    if (textNode) {
        textNode.nodeValue = value;
        Array.from(element.childNodes).forEach((node) => {
            if (node !== textNode && node.nodeType === Node.TEXT_NODE) {
                node.nodeValue = "";
            }
        });
    } else {
        element.textContent = value;
    }
}

function applyTranslations(language) {
    currentLanguage = language === "en" ? "en" : "vi";
    document.documentElement.lang = currentLanguage;

    $$("[data-i18n]").forEach((element) => {
        const contactLink = element.closest("[data-contact-link]");
        if (contactLink && contactLink.dataset.placeholder !== "true") {
            return;
        }
        const key = element.dataset.i18n;
        if (element.hasAttribute("data-i18n-html")) {
            element.innerHTML = getTranslation(key);
        } else {
            setNodeText(element, getTranslation(key));
        }
    });

    $$("[data-i18n-aria]").forEach((element) => {
        element.setAttribute("aria-label", getTranslation(element.dataset.i18nAria));
    });

    $$("[data-i18n-alt]").forEach((element) => {
        element.alt = getTranslation(element.dataset.i18nAlt);
    });
    $$(".scratch-image[data-fallback-key]").forEach((image) => {
        const artwork = image.closest(".scratch-art");
        if (artwork && artwork.classList.contains("image-missing")) {
            artwork.dataset.fallback = getTranslation(image.dataset.fallbackKey);
        }
    });

    const description = $("#pageDescription");
    if (description) {
        description.content = currentLanguage === "vi"
            ? "Portfolio cá nhân của Nguyễn Ngọc Minh Thư - Sinh viên Khoa học dữ liệu, định hướng Frontend Developer."
            : "Personal portfolio of Jane Nguyen, a Data Science student aspiring to become a Frontend Developer.";
    }

    const title = document.querySelector("title");
    if (title) {
        title.textContent = currentLanguage === "vi"
            ? "Minh Thư | Rạp Phim Cá Nhân"
            : "Minh Thu | Personal Screening Room";
    }

    $$(".language-option").forEach((button) => {
        button.setAttribute("aria-pressed", String(button.dataset.language === currentLanguage));
    });
    if (menuToggle) {
        menuToggle.setAttribute(
            "aria-label",
            getTranslation(navigation && navigation.classList.contains("open") ? "menu-close" : "menu-open")
        );
    }

    $$(".nav-link").forEach((link) => {
        link.dataset.room = currentLanguage === "vi"
            ? link.dataset.roomVi
            : link.dataset.roomEn;
    });

    $$(".skill-item").forEach((item) => {
        if (!Object.hasOwn(item.dataset, "descriptionVi")) {
            item.dataset.descriptionVi = item.dataset.description || "";
        }
        item.dataset.description = currentLanguage === "vi"
            ? item.dataset.descriptionVi
            : item.dataset.descriptionEn || item.dataset.descriptionVi;
    });

    updateColorSwitcher();
    updateProjectModalLanguage();
    updateContactTicketLinks();
    updatePrinterDisplay();
    scratchCardRefreshers.forEach((refresh) => refresh());
}

const languageButtons = $$(".language-option");
languageButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const language = button.dataset.language;
        applyTranslations(language);
        try {
            localStorage.setItem("portfolio-language", language);
        } catch (error) {
            console.warn("Unable to save the language preference.", error);
        }
    });
});


/* Personal photo carousel: manual controls only. */
const portraitCarousel = $("#portraitCarousel");
if (portraitCarousel) {
    const frame = portraitCarousel.querySelector(".portrait-frame");
    const slides = Array.from(portraitCarousel.querySelectorAll(".portrait-slide"));
    const dots = Array.from(portraitCarousel.querySelectorAll("[data-portrait-index]"));
    const status = portraitCarousel.querySelector(".portrait-status");
    let index = 0;
    let swipe = null;

    const showPhoto = (next) => {
        index = (next + slides.length) % slides.length;
        slides.forEach((slide, i) => {
            slide.classList.toggle("is-active", i === index);
            slide.setAttribute("aria-hidden", String(i !== index));
        });
        dots.forEach((dot, i) => dot.setAttribute("aria-pressed", String(i === index)));
        status.textContent = `${String(index + 1).padStart(2, "0")} / 03`;
    };

    portraitCarousel.querySelector("[data-portrait-prev]").addEventListener("click", () => showPhoto(index - 1));
    portraitCarousel.querySelector("[data-portrait-next]").addEventListener("click", () => showPhoto(index + 1));
    dots.forEach((dot) => dot.addEventListener("click", () => showPhoto(Number(dot.dataset.portraitIndex))));
    portraitCarousel.addEventListener("keydown", (event) => {
        if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
            event.preventDefault();
            showPhoto(index + (event.key === "ArrowRight" ? 1 : -1));
        }
    });

    frame.addEventListener("pointerdown", (event) => {
        if (event.pointerType === "mouse" || !event.isPrimary || event.target.closest("button")) {
            return;
        }
        swipe = { id: event.pointerId, x: event.clientX, y: event.clientY };
        frame.setPointerCapture(event.pointerId);
    });
    frame.addEventListener("pointerup", (event) => {
        if (!swipe || swipe.id !== event.pointerId) {
            return;
        }
        const dx = event.clientX - swipe.x;
        const dy = event.clientY - swipe.y;
        swipe = null;
        if (Math.abs(dx) >= 40 && Math.abs(dx) > Math.abs(dy) * 1.4) {
            showPhoto(index + (dx < 0 ? 1 : -1));
        }
    });
    const cancelSwipe = () => { swipe = null; };
    frame.addEventListener("pointercancel", cancelSwipe);
    frame.addEventListener("lostpointercapture", cancelSwipe);

    portraitCarousel.querySelectorAll("[data-portrait-image]").forEach((image) => {
        const updateImage = () => {
            const loaded = image.complete && image.naturalWidth > 0;
            image.hidden = !loaded;
            image.closest(".portrait-slide").classList.toggle("has-image", loaded);
        };
        image.addEventListener("load", updateImage);
        image.addEventListener("error", updateImage);
        updateImage();
    });
}


/* ==========================================
   02.2. CINEMA COLOR MODE
========================================== */

const cinemaColorToggle = $("#cinemaColorToggle");

function updateColorSwitcher() {
    if (!cinemaColorToggle) {
        return;
    }

    const blueMode = document.body.classList.contains("blue-mode");
    const label = getTranslation(blueMode ? "color-switch-red" : "color-switch-blue");
    cinemaColorToggle.setAttribute("aria-pressed", String(blueMode));
    cinemaColorToggle.setAttribute("aria-label", label);
    cinemaColorToggle.title = label;
    cinemaColorToggle.dataset.tooltip = getTranslation("color-switch-tooltip");
}

if (cinemaColorToggle) {
    cinemaColorToggle.addEventListener("click", () => {
        const blueMode = document.body.classList.toggle("blue-mode");
        updateColorSwitcher();
        try {
            localStorage.setItem("portfolio-color-mode", blueMode ? "blue" : "red");
        } catch (error) {
            console.warn("Unable to save the cinema color preference.", error);
        }
    });
}


/* ==========================================
   02.3. SCRATCH CARDS
========================================== */

const scratchCardRefreshers = [];
const SCRATCH_CONFIG = Object.freeze({
    desktopRadius: 50,
    mobileRadius: 40,
    revealThreshold: 0.6,
    coverageSampleInterval: 180,
    coverageSampleStep: 8
});
const scratchHoverQuery = window.matchMedia("(hover: hover) and (pointer: fine)");

function drawScratchStamp(context, x, y, radius) {
    const brush = context.createRadialGradient(x, y, radius * 0.18, x, y, radius);
    brush.addColorStop(0, "rgba(0, 0, 0, 1)");
    brush.addColorStop(0.72, "rgba(0, 0, 0, 0.95)");
    brush.addColorStop(1, "rgba(0, 0, 0, 0)");
    context.fillStyle = brush;
    context.beginPath();
    context.arc(x, y, radius, 0, Math.PI * 2);
    context.fill();
}

function eraseScratchSegment(context, start, end, radius) {
    context.lineCap = "round";
    context.lineJoin = "round";
    context.lineWidth = radius * 1.44;
    context.strokeStyle = "rgba(0, 0, 0, 1)";
    context.beginPath();
    context.moveTo(start[0], start[1]);
    context.lineTo(end[0], end[1]);
    context.stroke();
    const distance = Math.hypot(end[0] - start[0], end[1] - start[1]);
    const steps = Math.max(1, Math.ceil(distance / Math.max(4, radius * 0.22)));
    for (let step = 0; step <= steps; step++) {
        const progress = step / steps;
        drawScratchStamp(
            context,
            start[0] + (end[0] - start[0]) * progress,
            start[1] + (end[1] - start[1]) * progress,
            radius
        );
    }
}

function drawScratchLayer(context, canvas, state) {
    const bounds = canvas.getBoundingClientRect();
    const ratio = Math.max(1, window.devicePixelRatio || 1);
    const width = Math.max(1, bounds.width);
    const height = Math.max(1, bounds.height);

    canvas.width = Math.round(width * ratio);
    canvas.height = Math.round(height * ratio);
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    context.globalCompositeOperation = "source-over";

    const gradient = context.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, "#77756f");
    gradient.addColorStop(0.48, "#5d5b57");
    gradient.addColorStop(1, "#77746d");
    context.fillStyle = gradient;
    context.fillRect(0, 0, width, height);

    context.globalAlpha = 0.16;
    context.strokeStyle = "#d7d2c8";
    context.lineWidth = 1;
    for (let x = -height; x < width; x += 12) {
        context.beginPath();
        context.moveTo(x, 0);
        context.lineTo(x + height, height);
        context.stroke();
    }
    context.globalAlpha = 1;

    context.globalCompositeOperation = "destination-out";
    state.strokes.forEach((stroke) => {
        stroke.points.forEach((point, index) => {
            const current = [point[0] * width, point[1] * height];
            const previous = index
                ? [stroke.points[index - 1][0] * width, stroke.points[index - 1][1] * height]
                : current;
            eraseScratchSegment(context, previous, current, stroke.radius);
        });
    });
    context.globalCompositeOperation = "source-over";
}

function getScratchCoverage(context, canvas) {
    const pixels = context.getImageData(0, 0, canvas.width, canvas.height).data;
    let total = 0;
    let cleared = 0;
    const pixelStride = Math.max(1, Math.round(
        SCRATCH_CONFIG.coverageSampleStep * Math.max(1, window.devicePixelRatio || 1)
    ));
    for (let y = 0; y < canvas.height; y += pixelStride) {
        for (let x = 3; x < canvas.width * 4; x += pixelStride * 4) {
            const index = y * canvas.width * 4 + x;
            cleared += (255 - pixels[index]) / 255;
            total++;
        }
    }
    return total ? cleared / total : 0;
}

function initializeScratchCard(card) {
    const canvas = card.querySelector(".scratch-canvas");
    const context = canvas && canvas.getContext("2d", { willReadFrequently: true });
    const status = card.querySelector(".scratch-status");
    const revealButton = card.querySelector("[data-scratch-reveal]");
    const resetButton = card.querySelector("[data-scratch-reset]");
    const image = card.querySelector(".scratch-image");

    if (!canvas || !context || !status || !revealButton || !resetButton) {
        console.error("Scratch card is missing a required canvas or control.", card);
        return;
    }

    const state = { strokes: [], activeStroke: null, activePointerId: null, revealed: false };
    const redraw = () => {
        state.activeStroke = null;
        state.activePointerId = null;
        drawScratchLayer(context, canvas, state);
    };
    let coverageTimer = null;

    if (image) {
        const showImageFallback = () => {
            image.style.display = "none";
            const artwork = image.closest(".scratch-art");
            if (artwork) {
                artwork.dataset.fallback = getTranslation(
                    image.dataset.fallbackKey
                ) || image.dataset.fallback || "ADD YOUR IMAGE";
                artwork.classList.add("image-missing");
            }
        };
        image.addEventListener("error", showImageFallback, { once: true });
        if (image.complete && !image.naturalWidth) {
            showImageFallback();
        }
    }

    const updateStatus = () => {
        status.textContent = getTranslation(state.revealed ? "scratch-revealed" : "scratch-hidden");
        card.classList.toggle("is-revealed", state.revealed);
        card.classList.toggle("is-scratched", state.strokes.length > 0);
        revealButton.hidden = state.revealed;
        resetButton.hidden = !state.revealed;
    };
    scratchCardRefreshers.push(updateStatus);

    const reveal = () => {
        clearTimeout(coverageTimer);
        coverageTimer = null;
        state.activeStroke = null;
        state.activePointerId = null;
        state.revealed = true;
        updateStatus();
    };

    const scheduleCoverageCheck = () => {
        if (coverageTimer !== null) {
            return;
        }
        coverageTimer = setTimeout(() => {
            coverageTimer = null;
            if (!state.revealed && getScratchCoverage(context, canvas) >= SCRATCH_CONFIG.revealThreshold) {
                reveal();
            }
        }, SCRATCH_CONFIG.coverageSampleInterval);
    };

    const pointFromEvent = (event) => {
        const rect = canvas.getBoundingClientRect();
        return [
            Math.min(1, Math.max(0, (event.clientX - rect.left) / rect.width)),
            Math.min(1, Math.max(0, (event.clientY - rect.top) / rect.height))
        ];
    };

    const brushRadius = (pointerType) => {
        const rect = canvas.getBoundingClientRect();
        const configuredRadius = pointerType !== "mouse"
            ? SCRATCH_CONFIG.mobileRadius
            : SCRATCH_CONFIG.desktopRadius;
        return Math.min(configuredRadius, rect.width * 0.24, rect.height * 0.24);
    };

    const beginStroke = (event) => {
        const rect = canvas.getBoundingClientRect();
        const point = pointFromEvent(event);
        const radius = brushRadius(event.pointerType);
        state.activeStroke = { points: [point], radius };
        state.strokes.push(state.activeStroke);
        const position = [point[0] * rect.width, point[1] * rect.height];
        context.globalCompositeOperation = "destination-out";
        drawScratchStamp(context, position[0], position[1], radius);
        context.globalCompositeOperation = "source-over";
        card.classList.add("is-scratched");
        scheduleCoverageCheck();
    };

    const extendStroke = (event) => {
        if (!state.activeStroke) {
            return;
        }
        const rect = canvas.getBoundingClientRect();
        const point = pointFromEvent(event);
        const points = state.activeStroke.points;
        const previous = points[points.length - 1];
        if (Math.hypot(
            (point[0] - previous[0]) * rect.width,
            (point[1] - previous[1]) * rect.height
        ) < 1) {
            return;
        }
        points.push(point);
        context.globalCompositeOperation = "destination-out";
        eraseScratchSegment(
            context,
            [previous[0] * rect.width, previous[1] * rect.height],
            [point[0] * rect.width, point[1] * rect.height],
            state.activeStroke.radius
        );
        context.globalCompositeOperation = "source-over";

        scheduleCoverageCheck();
    };

    const finishScratch = () => {
        if (!state.activeStroke) {
            return;
        }
        state.activeStroke = null;
        state.activePointerId = null;
        clearTimeout(coverageTimer);
        coverageTimer = null;
        if (getScratchCoverage(context, canvas) >= SCRATCH_CONFIG.revealThreshold) {
            reveal();
        } else {
            updateStatus();
        }
    };

    canvas.addEventListener("pointerenter", (event) => {
        if (!state.revealed && event.pointerType === "mouse" && scratchHoverQuery.matches
            && !state.activeStroke && state.activePointerId === null) {
            beginStroke(event);
        }
    });

    canvas.addEventListener("pointerdown", (event) => {
        if (event.pointerType === "mouse" || state.revealed || state.activePointerId !== null) {
            return;
        }
        event.preventDefault();
        state.activePointerId = event.pointerId;
        canvas.setPointerCapture(event.pointerId);
        beginStroke(event);
    });

    canvas.addEventListener("pointermove", (event) => {
        if (state.revealed) {
            return;
        }
        if (event.pointerType === "mouse" && scratchHoverQuery.matches) {
            if (!state.activeStroke) {
                beginStroke(event);
            } else if (state.activePointerId === null) {
                extendStroke(event);
            }
            return;
        }
        if (event.pointerId === state.activePointerId) {
            event.preventDefault();
            extendStroke(event);
        }
    });

    canvas.addEventListener("pointerup", (event) => {
        if (event.pointerId === state.activePointerId) {
            finishScratch();
        }
    });
    canvas.addEventListener("lostpointercapture", (event) => {
        if (event.pointerId === state.activePointerId) {
            finishScratch();
        }
    });
    canvas.addEventListener("pointercancel", (event) => {
        if (event.pointerId === state.activePointerId) {
            finishScratch();
        }
    });
    canvas.addEventListener("pointerleave", (event) => {
        if (event.pointerType === "mouse" && state.activePointerId === null) {
            finishScratch();
        }
    });
    revealButton.addEventListener("click", reveal);
    resetButton.addEventListener("click", () => {
        state.strokes = [];
        state.activeStroke = null;
        state.activePointerId = null;
        state.revealed = false;
        clearTimeout(coverageTimer);
        coverageTimer = null;
        redraw();
        updateStatus();
    });

    const resizeObserver = "ResizeObserver" in window
        ? new ResizeObserver(redraw)
        : null;
    if (resizeObserver) {
        resizeObserver.observe(canvas);
    } else {
        window.addEventListener("resize", redraw, { passive: true });
    }

    redraw();
    updateStatus();
}

$$("[data-scratch-card]").forEach(initializeScratchCard);

$$("[data-profile-image]").forEach((image) => {
    const updateImage = () => {
        const loaded = image.complete && image.naturalWidth > 0;
        image.hidden = !loaded;
        image.closest(".profile-photo").classList.toggle("has-image", loaded);
        const photoButton = image.closest("[data-study-photo]");
        if (photoButton) {
            photoButton.disabled = !loaded;
        }
    };
    image.addEventListener("load", updateImage);
    image.addEventListener("error", updateImage);
    updateImage();
});



/* Enlarge study photos without leaving the timeline. */
const studyPhotoDialog = $("#studyPhotoDialog");
const studyPhotoFull = $("#studyPhotoFull");
const studyPhotoCaption = $("#studyPhotoCaption");

$$("[data-study-photo]").forEach((button) => {
    button.addEventListener("click", () => {
        const image = button.querySelector("img");
        studyPhotoFull.src = image.currentSrc || image.src;
        studyPhotoFull.alt = image.alt;
        studyPhotoFull.dataset.i18nAlt = image.dataset.i18nAlt;
        studyPhotoCaption.textContent = image.alt;
        studyPhotoCaption.dataset.i18n = image.dataset.i18nAlt;
        studyPhotoDialog.showModal();
        document.body.classList.add("study-photo-open");
    });
});

$("#studyPhotoClose").addEventListener("click", () => studyPhotoDialog.close());
studyPhotoDialog.addEventListener("click", (event) => {
    if (event.target === studyPhotoDialog) {
        studyPhotoDialog.close();
    }
});
studyPhotoDialog.addEventListener("close", () => {
    document.body.classList.remove("study-photo-open");
});


/* ==========================================
   02.4. CINEMA TICKET PRINTER
========================================== */

const ticketPrinter = $("#ticketPrinter");
const printerMessage = $("#printerMessage");
const printerSubmessage = $("#printerSubmessage");
const printTicketButton = $("#printTicket");
const printedTicket = $("#printedTicket");
const ticketOverlay = $("#ticketOverlay");
const printAgainButton = $("#printAgain");
let ticketState = "idle";
let ticketPrintTimer = null;
let ticketPreviousFocus = null;

function updatePrinterDisplay() {
    if (!printerMessage || !printerSubmessage || !ticketPrinter) {
        return;
    }

    const messageKeys = {
        idle: ["printer-ready", "printer-prompt"],
        printing: ["printer-printing", "printer-wait"],
        ready: ["printer-ticket-ready", "printer-tap-ticket"]
    };
    const displayState = ticketState === "revealed" ? "ready" : ticketState;
    const keys = messageKeys[displayState] || messageKeys.idle;
    setNodeText(printerMessage, getTranslation(keys[0]));
    setNodeText(printerSubmessage, getTranslation(keys[1]));
    const machine = ticketPrinter.querySelector(".ticket-printer");
    if (machine) {
        machine.classList.toggle("is-printing", ticketState === "printing");
        machine.classList.toggle("is-ready", displayState === "ready");
    }
    if (printTicketButton) {
        printTicketButton.disabled = ticketState !== "idle";
    }
    if (printedTicket) {
        printedTicket.setAttribute("aria-hidden", String(displayState !== "ready"));
        printedTicket.tabIndex = displayState === "ready" ? 0 : -1;
    }
}

function startTicketPrint() {
    if (!ticketPrinter || !["idle", "revealed"].includes(ticketState)) {
        return;
    }

    const shouldFocusTicket = ticketState === "revealed" ||
        document.activeElement === printAgainButton ||
        document.activeElement === printTicketButton;
    clearTimeout(ticketPrintTimer);
    closeTicketOverlay(false);
    ticketState = "printing";
    updatePrinterDisplay();
    ticketPrintTimer = window.setTimeout(() => {
        ticketState = "ready";
        updatePrinterDisplay();
        if (shouldFocusTicket && printedTicket) {
            printedTicket.focus();
        }
    }, reducedMotion.matches ? 0 : 1400);
}

function openTicketOverlay() {
    if (!ticketOverlay || ticketState !== "ready") {
        return;
    }
    ticketPreviousFocus = document.activeElement;
    ticketOverlay.classList.add("open");
    ticketOverlay.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    ticketState = "revealed";
    updatePrinterDisplay();
    const closeButton = ticketOverlay.querySelector(".ticket-overlay-close");
    if (closeButton) {
        closeButton.focus();
    }
}

function closeTicketOverlay(restoreFocus = true) {
    if (!ticketOverlay || !ticketOverlay.classList.contains("open")) {
        return;
    }
    ticketOverlay.classList.remove("open");
    ticketOverlay.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
    if (ticketState === "revealed") {
        ticketState = "ready";
        updatePrinterDisplay();
    }
    if (restoreFocus && ticketPreviousFocus instanceof HTMLElement) {
        ticketPreviousFocus.focus();
    }
}

if (printTicketButton) {
    printTicketButton.addEventListener("click", startTicketPrint);
}
if (printedTicket) {
    printedTicket.addEventListener("click", openTicketOverlay);
}
if (printAgainButton) {
    printAgainButton.addEventListener("click", startTicketPrint);
}
$$("[data-ticket-close]").forEach((button) => {
    button.addEventListener("click", () => closeTicketOverlay());
});

function updateContactTicketLinks() {
    const sources = $$(`.contact-links [data-contact-link]`);
    sources.forEach((source) => {
        const target = $(`.connection-ticket [data-contact-link="${source.dataset.contactLink}"]`);
        if (!target) {
            return;
        }

        target.href = source.href;
        const value = source.querySelector("strong");
        if (value) {
            target.textContent = value.textContent.trim();
        }

        if (source.dataset.placeholder === "true") {
            target.dataset.placeholder = "true";
            target.dataset.placeholderLabel = source.dataset.placeholderLabel;
        } else {
            delete target.dataset.placeholder;
            delete target.dataset.placeholderLabel;
        }
    });
}

/* ==========================================
   03. CINEMA INTRO
========================================== */

const cinemaIntro = $("#cinemaIntro");

const enterCinemaButton = $("#enterCinema");

// Khóa cuộn khi intro xuất hiện.
if (cinemaIntro && !cinemaIntro.classList.contains("hidden")) {
    document.body.classList.add("intro-active");
}


// Hàm mở rạp.
function enterCinema() {

    if (!cinemaIntro) {
        return;
    }

    cinemaIntro.classList.add("opening");

    document.body.classList.remove("intro-active");

    setTimeout(() => {

        cinemaIntro.classList.add("hidden");

    }, reducedMotion.matches ? 0 : 1400);

}


// Click nút ENTER THE CINEMA.
if (enterCinemaButton) {

    enterCinemaButton.addEventListener(
        "click",
        enterCinema
    );

}



/* ==========================================
   04. HEADER SCROLL
========================================== */

const header = $("#header");

function updateHeader() {

    if (!header) {
        return;
    }

    if (window.scrollY > 40) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

}


// Lắng nghe cuộn trang.
window.addEventListener(
    "scroll",
    updateHeader,
    { passive: true }
);


// Chạy lần đầu.
updateHeader();



/* ==========================================
   05. MOBILE NAVIGATION
========================================== */

const menuToggle = $("#menuToggle");

const navigation = $("#navigation");

const navLinks = $$(".nav-link");


// Mở menu.
function openMenu() {

    if (!navigation || !menuToggle) {
        return;
    }

    navigation.classList.add("open");

    menuToggle.classList.add("active");

    menuToggle.setAttribute(
        "aria-expanded",
        "true"
    );

    menuToggle.setAttribute(
        "aria-label",
        getTranslation("menu-close")
    );

    document.body.classList.add("menu-open");

}


// Đóng menu.
function closeMenu() {

    if (!navigation || !menuToggle) {
        return;
    }

    navigation.classList.remove("open");

    menuToggle.classList.remove("active");

    menuToggle.setAttribute(
        "aria-expanded",
        "false"
    );

    menuToggle.setAttribute(
        "aria-label",
        getTranslation("menu-open")
    );

    document.body.classList.remove("menu-open");

}


// Toggle menu.
if (menuToggle) {

    menuToggle.addEventListener("click", () => {

        if (navigation.classList.contains("open")) {

            closeMenu();

        } else {

            openMenu();

        }

    });

}


// Đóng menu khi click vào liên kết.
navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        closeMenu();

    });

});


// Đóng menu khi chuyển sang desktop.
window.addEventListener("resize", () => {

    if (window.innerWidth > 1200) {

        closeMenu();

    }

});



/* ==========================================
   06. NAVIGATION HOVER TOOLTIP
========================================== */

const navTooltip = $("#navTooltip");

const canHover = window.matchMedia(
    "(hover: hover) and (pointer: fine)"
);


// Hiện tooltip.
function showNavTooltip(link) {

    if (!navTooltip || !canHover.matches) {
        return;
    }

    const room = link.dataset.room;

    const time = link.dataset.time;

    navTooltip.textContent = `${room} — ${time}`;

    const rect = link.getBoundingClientRect();

    const centerX = rect.left + rect.width / 2;

    const topY = rect.bottom + 25;

    navTooltip.style.left = `${centerX}px`;

    navTooltip.style.top = `${topY}px`;

    navTooltip.classList.add("visible");

}


// Ẩn tooltip.
function hideNavTooltip() {

    if (!navTooltip) {
        return;
    }

    navTooltip.classList.remove("visible");

}


// Gắn sự kiện.
navLinks.forEach((link) => {

    link.addEventListener("mouseenter", () => {

        showNavTooltip(link);

    });

    link.addEventListener(
        "mouseleave",
        hideNavTooltip
    );

    link.addEventListener(
        "focus",
        () => showNavTooltip(link)
    );

    link.addEventListener(
        "blur",
        hideNavTooltip
    );

});



/* ==========================================
   07. ACTIVE NAVIGATION ON SCROLL
========================================== */

const observedSections = $$(
    "#about, #education, #skills, #certificates, #projects, #contact"
);


// Xóa active khỏi tất cả menu.
function clearActiveNavigation() {

    navLinks.forEach((link) => {

        link.classList.remove("active");

    });

}


// Gán active theo section.
function setActiveNavigation(sectionId) {

    clearActiveNavigation();

    const activeLink = document.querySelector(
        `.nav-link[href="#${sectionId}"]`
    );

    if (activeLink) {

        activeLink.classList.add("active");

    }

}


// Intersection Observer.
if ("IntersectionObserver" in window) {

    const sectionObserver = new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    setActiveNavigation(
                        entry.target.id
                    );

                }

            });

        },

        {
            root: null,

            rootMargin: "-25% 0px -60% 0px",

            threshold: 0
        }

    );


    observedSections.forEach((section) => {

        sectionObserver.observe(section);

    });

}



/* ==========================================
   09. SCROLL REVEAL
========================================== */

const revealElements = $$(".reveal");


if (
    "IntersectionObserver" in window &&
    !reducedMotion.matches
) {

    const revealObserver = new IntersectionObserver(

        (entries, observer) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.08,

            rootMargin: "0px 0px -40px 0px"
        }

    );


    revealElements.forEach((element) => {

        revealObserver.observe(element);

    });

} else {

    // Trình duyệt cũ hoặc reduced motion.
    revealElements.forEach((element) => {

        element.classList.add("visible");

    });

}



/* ==========================================
   10. PROJECT MODAL
========================================== */

const projectModal = $("#projectModal");

const modalBackdrop = $("#modalBackdrop");

const modalClose = $("#modalClose");

const modalNumber = $("#modalNumber");

const modalTitle = $("#modalTitle");

const modalDescription = $("#modalDescription");
const modalContribution = $("#modalContribution");
const modalProjectImage = $("#modalProjectImage");
const modalImagePlaceholder = $("#modalImagePlaceholder");

const modalTechnologies = $("#modalTechnologies");

const modalGithub = $("#modalGithub");

const modalDemo = $("#modalDemo");

let lastFocusedElement = null;
let activeProjectId = null;

function updateProjectModalLanguage() {
    if (!activeProjectId || !projectModal) {
        return;
    }

    const project = projects[activeProjectId];
    if (!project) {
        return;
    }
    if (modalNumber) {
        modalNumber.textContent = getTranslation(`project-number-${activeProjectId}`);
    }
    if (modalDescription) {
        modalDescription.textContent = project.description[currentLanguage];
    }
    modalTitle.textContent = project.title[currentLanguage];
    modalContribution.textContent = project.contribution[currentLanguage];
    renderProjectResults(project);
    modalProjectImage.alt = getTranslation(`project-image-${activeProjectId}`);
    modalImagePlaceholder.textContent = getTranslation(`project-image-${activeProjectId}`);
    updateProjectLink(modalGithub, project.github, "GitHub của dự án");
    updateProjectLink(modalDemo, project.demo, "Live Demo của dự án");
}


// Tables keep the provided metrics separate from the written observations.
function renderProjectResults(project) {
    const section = $("#modalResults");
    const table = $("#modalResultsTable");
    const notes = $("#modalResultsNotes");
    table.replaceChildren();
    notes.replaceChildren();
    section.hidden = !project.results;
    if (!project.results) {
        return;
    }

    table.setAttribute("aria-label", getTranslation("modal-results"));
    const headerRow = table.createTHead().insertRow();
    project.results.headers[currentLanguage].forEach((label) => {
        const cell = document.createElement("th");
        cell.scope = "col";
        cell.textContent = label;
        headerRow.appendChild(cell);
    });
    const body = table.createTBody();
    project.results.rows[currentLanguage].forEach((values) => {
        const row = body.insertRow();
        values.forEach((value, index) => {
            const cell = document.createElement(index === 0 ? "th" : "td");
            if (index === 0) {
                cell.scope = "row";
            }
            cell.textContent = value;
            row.appendChild(cell);
        });
    });
    project.results.notes[currentLanguage].forEach((text) => {
        const item = document.createElement("li");
        item.textContent = text;
        notes.appendChild(item);
    });
}


// Hàm cập nhật liên kết trong modal.
function updateProjectLink(element, url, label) {

    if (!element) {
        return;
    }

    if (!url || url === "#") {

        element.href = "#";

        element.dataset.placeholder = "true";

        element.dataset.placeholderLabel = label;

        element.classList.add("is-placeholder");

        const key = label === "GitHub của dự án"
            ? "project-github-placeholder"
            : "project-demo-placeholder";
        element.setAttribute("aria-label", getTranslation(key));

    } else {

        element.href = url;

        delete element.dataset.placeholder;

        delete element.dataset.placeholderLabel;

        element.classList.remove("is-placeholder");

        const key = element.id === "modalGithub"
            ? "project-github-link"
            : "project-demo-link";
        element.setAttribute("aria-label", getTranslation(key));

    }

}


// Mở modal.
function openProjectModal(projectId) {

    const project = projects[projectId];

    if (!project || !projectModal) {
        return;
    }

    activeProjectId = projectId;
    lastFocusedElement = document.activeElement;


    // Cập nhật nội dung.
    modalNumber.textContent = getTranslation(`project-number-${projectId}`);

    modalTitle.textContent = project.title[currentLanguage];

    modalDescription.textContent = project.description[currentLanguage];
    modalContribution.textContent = project.contribution[currentLanguage];
    renderProjectResults(project);
    modalProjectImage.hidden = true;
    modalProjectImage.closest(".profile-photo").classList.remove("has-image");
    modalProjectImage.alt = getTranslation(`project-image-${projectId}`);
    modalImagePlaceholder.textContent = getTranslation(`project-image-${projectId}`);
    if (project.image) {
        modalProjectImage.src = project.image;
    } else {
        modalProjectImage.removeAttribute("src");
    }
    modalDemo.hidden = !project.demo || project.demo === "#";

    // Xóa danh sách công nghệ cũ.
    modalTechnologies.innerHTML = "";


    // Thêm công nghệ.
    project.technologies.forEach((technology) => {

        const span = document.createElement("span");

        span.textContent = technology;

        modalTechnologies.appendChild(span);

    });


    // Cập nhật GitHub.
    updateProjectLink(
        modalGithub,
        project.github,
        "GitHub của dự án"
    );


    // Cập nhật Demo.
    updateProjectLink(
        modalDemo,
        project.demo,
        "Live Demo của dự án"
    );


    // Hiện modal.
    projectModal.classList.add("open");

    projectModal.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.classList.add("modal-open");

    modalClose.focus();

}


// Đóng modal.
function closeProjectModal() {

    if (!projectModal) {
        return;
    }

    projectModal.classList.remove("open");

    projectModal.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.classList.remove("modal-open");


    // Trả focus về phần tử đã mở modal.
    if (lastFocusedElement) {

        lastFocusedElement.focus();

    }

}


// Gắn sự kiện cho poster và nút chi tiết.
$$("[data-project]").forEach((element) => {

    element.addEventListener("click", () => {

        const projectId = element.dataset.project;

        openProjectModal(projectId);

    });

});


// Nút đóng modal.
if (modalClose) {

    modalClose.addEventListener(
        "click",
        closeProjectModal
    );

}


// Click vùng nền để đóng.
if (modalBackdrop) {

    modalBackdrop.addEventListener(
        "click",
        closeProjectModal
    );

}



/* ==========================================
   11. KEYBOARD INTERACTIONS
========================================== */

document.addEventListener("keydown", (event) => {

    // ESC đóng modal hoặc menu.
    if (event.key === "Escape") {

        if (ticketOverlay && ticketOverlay.classList.contains("open")) {
            closeTicketOverlay();
            return;
        }

        if (
            projectModal &&
            projectModal.classList.contains("open")
        ) {

            closeProjectModal();

        }

        closeMenu();

        hideNavTooltip();

    }


    // Giữ focus trong modal.
    if (
        event.key === "Tab" &&
        projectModal &&
        projectModal.classList.contains("open")
    ) {

        const focusableElements = Array.from(
            projectModal.querySelectorAll(
                'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
            )
        ).filter((element) => {

            return element.getClientRects().length > 0;

        });


        if (focusableElements.length === 0) {
            return;
        }


        const firstElement = focusableElements[0];

        const lastElement =
            focusableElements[focusableElements.length - 1];


        if (
            event.shiftKey &&
            document.activeElement === firstElement
        ) {

            event.preventDefault();

            lastElement.focus();

        } else if (
            !event.shiftKey &&
            document.activeElement === lastElement
        ) {

            event.preventDefault();

            firstElement.focus();

        }

    }

    if (
        event.key === "Tab" &&
        ticketOverlay &&
        ticketOverlay.classList.contains("open")
    ) {
        const focusableElements = Array.from(
            ticketOverlay.querySelectorAll(
                'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
            )
        ).filter((element) => element.getClientRects().length > 0);

        if (!focusableElements.length) {
            return;
        }

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        if (event.shiftKey && document.activeElement === firstElement) {
            event.preventDefault();
            lastElement.focus();
        } else if (!event.shiftKey && document.activeElement === lastElement) {
            event.preventDefault();
            firstElement.focus();
        }
    }

});



/* ==========================================
   12. TOAST NOTIFICATION
========================================== */

const toast = $("#toast");

let toastTimeout = null;


// Hiện thông báo.
function showToast(message) {

    if (!toast) {
        return;
    }

    clearTimeout(toastTimeout);

    toast.textContent = message;

    toast.classList.add("show");


    toastTimeout = setTimeout(() => {

        toast.classList.remove("show");

    }, 3000);

}



/* ==========================================
   13. PLACEHOLDER LINKS
========================================== */

/*
    Những link có:
    data-placeholder="true"

    sẽ không chuyển trang.

    Thay bằng link thật và xóa thuộc tính
    data-placeholder khi đã có thông tin.
*/

document.addEventListener("click", (event) => {

    const placeholderLink = event.target.closest(
        '[data-placeholder="true"]'
    );

    if (!placeholderLink) {
        return;
    }

    event.preventDefault();

    const label = (placeholderLink.dataset.placeholderLabel || "").toLowerCase();
    const translationKey = `toast-${label}`;
    showToast(
        translations[currentLanguage][translationKey] ||
        getTranslation("toast-link")
    );

});



/* ==========================================
   14. EASTER EGG
========================================== */

const cinemaCat = $("#cinemaCat");

const brandLogo = $("#brandLogo");

const secretMessage = $("#secretMessage");

let secretClickCount = 0;

let secretClickTimer = null;

let sushiPetTimer = null;

function showSecretScreening() {
    if (secretMessage && !secretMessage.open) {
        secretMessage.showModal();
    }
}

if (secretMessage) {
    secretMessage.querySelector("[data-sushi-close]").addEventListener("click", () => {
        secretMessage.close();
    });
    $("#petSushi").addEventListener("click", () => {
        secretMessage.close();
        clearTimeout(sushiPetTimer);
        cinemaCat.classList.remove("is-petted");
        // Restart the short animation on every visit.
        void cinemaCat.offsetWidth;
        cinemaCat.classList.add("is-petted");
        sushiPetTimer = setTimeout(() => cinemaCat.classList.remove("is-petted"), 1400);
    });
}


// Đếm số lần click.
function handleSecretClick() {

    secretClickCount++;


    // Reset bộ đếm nếu ngừng click quá lâu.
    clearTimeout(secretClickTimer);

    secretClickTimer = setTimeout(() => {

        secretClickCount = 0;

    }, 1200);


    // Click 3 lần liên tiếp.
    if (secretClickCount >= 3) {

        secretClickCount = 0;

        clearTimeout(secretClickTimer);

        showSecretScreening();

    }

}


// Click mèo.
if (cinemaCat) {

    cinemaCat.addEventListener(
        "click",
        showSecretScreening
    );

}


// Click logo.
// Ngăn nhảy về đầu trang khi đang thực hiện chuỗi click.
if (brandLogo) {

    brandLogo.addEventListener("click", (event) => {

        if (secretClickCount > 0) {

            event.preventDefault();

        }

        handleSecretClick();

    });

}



/* ==========================================
   15. SMOOTH ANCHOR SCROLL
========================================== */

$$('a[href^="#"]').forEach((link) => {

    link.addEventListener("click", (event) => {

        const href = link.getAttribute("href");


        // Bỏ qua link placeholder.
        if (
            !href ||
            href === "#" ||
            link.dataset.placeholder === "true"
        ) {

            return;
        }


        const target = document.querySelector(href);

        if (!target) {
            return;
        }


        event.preventDefault();


        target.scrollIntoView({

            behavior: reducedMotion.matches
                ? "auto"
                : "smooth",

            block: "start"

        });


        closeMenu();

    });

});



/* ==========================================
   16. CURRENT YEAR
========================================== */

const currentYear = $("#currentYear");

if (currentYear) {

    currentYear.textContent =
        new Date().getFullYear();

}


/* ==========================================
   17. RESTORE PREFERENCES
========================================== */

let savedLanguage = "vi";
let savedColorMode = "red";
try {
    savedLanguage = localStorage.getItem("portfolio-language") || "vi";
    savedColorMode = localStorage.getItem("portfolio-color-mode") === "blue" ? "blue" : "red";
} catch (error) {
    console.warn("Unable to restore saved portfolio preferences.", error);
}
document.body.classList.toggle("blue-mode", savedColorMode === "blue");
applyTranslations(savedLanguage);



/* ==========================================
   18. PAGE INITIALIZATION
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    // Cập nhật header.
    updateHeader();


    // Nếu không hỗ trợ IntersectionObserver,
    // đảm bảo nội dung vẫn xuất hiện.
    if (!("IntersectionObserver" in window)) {

        revealElements.forEach((element) => {

            element.classList.add("visible");

        });

    }

});