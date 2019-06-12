---
title: 'PDFBox : Extract Text from PDF'
author: Santhosh Thottingal
type: post
date: 2009-06-24T04:40:34+00:00
url: /blog/2009/06/24/pdfbox-extract-text-from-pdf/
categories:
  - Misc
tags:
  - java
  - pdf

---
<p style="text-align: justify;">
  Recently I had to extract text from PDF files for indexing the content using Apache Lucene. Apache PDFBox was the obvious choice for the java library to be used.
</p>

<p style="text-align: justify;">
  <a href="http://incubator.apache.org/pdfbox/">Apache PDFBox</a> is an opensource java library for working with PDF files. The PDFBox library allows creation of new PDF documents, manipulation of existing documents and the ability to extract content from documents. PDFBox also includes several command line utilities.
</p>

<p style="text-align: justify;">
  There is <a href="http://incubator.apache.org/pdfbox/download.html">no latest build available</a> for PDFBox. Sourceforge has very <a href="http://sourceforge.net/project/showfiles.php?group_id=78314">old binaries</a>. But  the old version<a href="https://issues.apache.org/jira/browse/PDFBOX-361"> fails to work with PDF 1.5 specification</a>. So one need to compile the latest code from SVN. 
</p>

<p style="text-align: justify;">
  I am sharing the latest jar file built from svn <a href="http://thottingal.in/download/pdfbox/">here</a>
</p>

<p style="text-align: justify;">
  The following example explains how to extract the text from a pdf file using PDFBox.
</p>

<pre lang="JAVA" line="1" colla="+">import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import org.apache.pdfbox.cos.COSDocument;
import org.apache.pdfbox.pdfparser.PDFParser;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.util.PDFTextStripper;

public class PDFTextParser {

	// Extract text from PDF Document
	static String pdftoText(String fileName) {
		PDFParser parser;
		String parsedText = null;;
		PDFTextStripper pdfStripper = null;
		PDDocument pdDoc = null;
		COSDocument cosDoc = null;
		File file = new File(fileName);
		if (!file.isFile()) {
			System.err.println("File " + fileName + " does not exist.");
			return null;
		}
		try {
			parser = new PDFParser(new FileInputStream(file));
		} catch (IOException e) {
			System.err.println("Unable to open PDF Parser. " + e.getMessage());
			return null;
		}
		try {
			parser.parse();
			cosDoc = parser.getDocument();
			pdfStripper = new PDFTextStripper();
			pdDoc = new PDDocument(cosDoc);
			pdfStripper.setStartPage(1);
			pdfStripper.setEndPage(5);
			parsedText = pdfStripper.getText(pdDoc);
		} catch (Exception e) {
			System.err
					.println("An exception occured in parsing the PDF Document."
							+ e.getMessage());
		} finally {
			try {
				if (cosDoc != null)
					cosDoc.close();
				if (pdDoc != null)
					pdDoc.close();
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		return parsedText;
	}
	public static void main(String args[]){
		System.out.println(pdftoText("/home/santhosh/pdfbox/test.pdf"));
	}

}

 </pre>

More details on the APIs can be read from [here][1]

 [1]: http://incubator.apache.org/pdfbox/userguide/index.html