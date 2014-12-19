# Makefile for building project documentsation

TARGET=achan_lundrigan_schreiner_kindsicher.pdf

MAIN_SOURCE=final_report.tex

CHAPTER_FILES= \
	ch1_abstract.tex \
	ch2_intro.tex \
	ch3_related.tex \
	ch4_design.tex \
	ch5_blocking.tex \
	ch6_reporting.tex \
	ch7_future.tex \
	ch8_conclusion.tex

OTHER_SOURCES=../project.bib \
	sigchi.cls

$(TARGET): $(MAIN_SOURCE) $(CHAPTER_FILES) $(OTHER_SOURCES)
	pdflatex $(MAIN_SOURCE)
	-bibtex $(basename $(MAIN_SOURCE))
	pdflatex $(MAIN_SOURCE)
	pdflatex $(MAIN_SOURCE)
	ln -f $(basename $(MAIN_SOURCE)).pdf $(TARGET)

eview: $(TARGET)
	@evince $(TARGET) &

oview: $(TARGET)
	@okular $(TARGET) &

cview: $(TARGET)
	@caspdf $(TARGET) &

clean:
	rm $(TARGET)

# end of file

