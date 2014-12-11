# Makefile for building project documentsation

TARGET=<dest_filename>

MAIN_SOURCE=<src_filename>

$(TARGET): $(MAIN_SOURCE)
	pdflatex $(MAIN_SOURCE)
	@# bibtex $(basename $(MAIN_SOURCE)) 
	pdflatex $(MAIN_SOURCE)
	pdflatex $(MAIN_SOURCE)
	ln -f $(basename $(MAIN_SOURCE)).pdf $(TARGET)

eview: $(TARGET)
	@evince $(TARGET) &

oview: $(TARGET)
	@okular $(TARGET) &

cview: $(TARGET)
	@caspdf $(TARGET) &

# end of file

