import cloudinary from "@/lib/cloudinary";

export async function POST(request) {
  try {
    const formData = await request.formData();

    const file = formData.get("file");

    if (!file) {
      return Response.json({ error: "No file uploaded" }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();

    const buffer = Buffer.from(bytes);

    const uploaded = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          {
            folder: "lovequest",
          },
          (error, result) => {
            if (error) reject(error);
            else resolve(result);
          },
        )
        .end(buffer);
    });

    return Response.json({
      url: uploaded.secure_url,
    });
  } catch (error) {
    console.error(error);

    return Response.json({ error: "Upload failed" }, { status: 500 });
  }
}
