import numpy as np
from sklearn import datasets
from sklearn.model_selection import train_test_split
from sklearn.neighbors import KNeighborsClassifier

# Load the iris dataset :)
iris = datasets.load_iris()
iris_target = iris.target
iris_data = iris.data

# Split the data into training and testing sets :)
X_train, X_test, y_train, y_test = train_test_split(iris_data, iris_target, test_size=0.4)

# Train a K-Nearest Neighbors classifier on the training data :)
knn = KNeighborsClassifier(n_neighbors=7)
knn.fit(X_train, y_train)

# Use the trained classifier to make predictions on the testing data :)
y_pred = knn.predict(X_test)

# Evaluate the accuracy of the classifier :)
accuracy = np.mean(y_pred == y_test)
print("Accuracy:", accuracy)
