'use client'
import ArticleContent from "./content";
import RelateNews from "./relate-article";
import ArticleTitle from "./title";

export default function NewsDetail() {

    //fetch data
    const article = {
        id: 1,
        category: {
            id: 2,
            name: "Tin tức",
            slug: "tin-tuc",
            parent: {
                id: 1,
                name: "Tin tức sự kiện",
                slug: "tin-tuc-su-kien",
            }
        },
        describe: "Chuẩn nghề nghiệp giáo viên cơ sở giáo dục phổ thông là căn cứ để giáo viên tự đánh giá phẩm chất, năng lực trong cả năm học.",
        title: "Quy định mới về chuẩn nghề nghiệp giáo viên cơ sở giáo dục phổ thông",
        content: `05 tiêu chuẩn trong Chuẩn nghề nghiệp giáo viên cơ sở giáo dục phổ thông năm 2024\n
            Chuẩn nghề nghiệp giáo viên cơ sở giáo dục phổ thông sẽ gồm 05 tiêu chuẩn như sau:\n
            - Tiêu chuẩn 1. Phẩm chất nhà giáo\n
            - Tiêu chuẩn 2. Phát triển chuyên môn, nghiệp v ụ\n
            - Tiêu chuẩn 3. Xây dựng môi trường giáo dục\n
            - Tiêu chuẩn 4. Phát triển mối quan hệ giữa nhà trường, gia đình và xã hội\n
            - Tiêu chuẩn 5. Sử dụng ngoại ngữ hoặc tiếng dân tộc, ứng dụng công nghệ thông tin, khai thác và sử dụng thiết bị công nghệ trong dạy học, giáo dục\n
            Chi tiết nội dung Chuẩn nghề nghiệp giáo viên cơ sở giáo dục phổ thông năm 2024\n
            Chi tiết nội dung Chuẩn nghề nghiệp giáo viên cơ sở giáo dục phổ thông năm 2024 được quy định tại Quy định ban hành kèm theo Thông tư 20/2018/TT-BGDĐT, cụ thể như sau:\n
            (1) Tiêu chuẩn 1. Phẩm chất nhà giáo\n
            Tuân thủ các quy định và rèn luyện về đạo đức nhà giáo; chia sẻ kinh nghiệm, hỗ trợ đồng nghiệp trong rèn luyện đạo đức và tạo dựng phong cách nhà giáo.\n
            - Tiêu chí 1. Đạo đức nhà giáo\n
            + Mức đạt: Thực hiện nghiêm túc các quy định về đạo đức nhà giáo;\n
            + Mức khá: Có tinh thần tự học, tự rèn luyện và phấn đấu nâng cao phẩm chất đạo đức nhà giáo;\n
            + Mức tốt: Là tấm gương mẫu mực về đạo đức nhà giáo; chia sẻ kinh nghiệm, hỗ trợ đồng nghiệp trong rèn luyện đạo đức nhà giáo.\n
            - Tiêu chí 2. Phong cách nhà giáo\n
            - Mức đạt: Có tác phong và cách thức làm việc phù hợp với công việc của giáo viên cơ sở giáo dục phổ thông;\n
            - Mức khá: Có ý thức tự rèn luyện tạo phong cách nhà giáo mẫu mực; ảnh hưởng tốt đến học sinh;\n
            - Mức tốt: Là tấm gương mẫu mực về phong cách nhà giáo; ảnh hưởng tốt và hỗ trợ đồng nghiệp hình thành phong cách nhà giáo.\n
            (2) Tiêu chuẩn 2. Phát triển chuyên môn, nghiệp vụ\n
            Nắm vững chuyên môn và thành thạo nghiệp vụ; thường xuyên cập nhật, nâng cao năng lực chuyên môn và nghiệp vụ đáp ứng yêu cầu đổi mới giáo dục.\n
            - Tiêu chí 3. Phát triển chuyên môn bản thân\n
            + Mức khá: Chủ động nghiên cứu, cập nhật kịp thời yêu cầu đổi mới về kiến thức chuyên môn; vận dụng sáng tạo, phù hợp các hình thức, phương pháp và lựa chọn nội dung học tập, bồi dưỡng, nâng cao năng lực chuyên môn của bản thân;\n
            + Mức tốt: Hướng dẫn, hỗ trợ đồng nghiệp và chia sẻ kinh nghiệm về phát triển chuyên môn của bản thân nhằm đáp ứng yêu cầu đổi mới giáo dục.\n
            - Tiêu chí 4. Xây dựng kế hoạch dạy học và giáo dục theo hướng phát triển phẩm chất, năng lực học sinh\n
            + Mức đạt: Xây dựng được kế hoạch dạy học và giáo dục;\n
            + Mức khá: Chủ động điều chỉnh kế hoạch dạy học và giáo dục phù hợp với điều kiện thực tế của nhà trường và địa phương;\n
            + Mức tốt: Hướng dẫn, hỗ trợ đồng nghiệp trong việc xây dựng kế hoạch dạy học và giáo dục.\n
            - Tiêu chí 5. Sử dụng phương pháp dạy học và giáo dục theo hướng phát triển phẩm chất, năng lực học sinh\n
            + Mức đạt: Áp dụng được các phương pháp dạy học và giáo dục phát triển phẩm chất, năng lực cho học sinh;\n
            + Mức khá: Chủ động cập nhật, vận dụng linh hoạt và hiệu quả các phương pháp dạy học và giáo dục đáp ứng yêu cầu`,
        thumbnail: "https://s3-alpha-sig.figma.com/img/0da9/81d4/106a0f29097c63da006d900577f581a0?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lsnsZqS9WdONyCtZa2EHvoW8XAqAswlwTeMlQJz0lhJ43TpoRmmBn7mW~~nPn61xu8sQgMPpgPApdwYN4kJIF1HHhCGk9w673yADM0PwRTzqlmeaf3F6tLhJ-M3loijgDRKmfOCapxla8uCi7Ty45TGeEi5iR1sXTRKcazED2aqE2nfShUI65~dIWauvNd3GlSW9PBZUMtGbCZxIaFhEiKHQeBLoWP5Av973qk38OOxOMHStBMOVloSQa-DTE1-QMvhLo4w~9DIpSjr~2kmzlgr138-xjI-kMvcO5uaS-hU0YPQDWYLCt0R37FOReoOelhDGAraevzvFPtdMe7etFg__",
        gallery: []
    }
    if (!article) {
        return <div>Loading...</div>;
    }
    return (
        <div className="flex flex-col items-center justify-center">
            <ArticleTitle {...article} />
            <ArticleContent content={article.content} describe={article.describe} />
            <RelateNews idCategory={article.category.id.toString()} />
        </div>
    );
}